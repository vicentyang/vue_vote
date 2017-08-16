/*
* @Author: vicent
* @Date:   2017-08-09 17:35:27
 * @Last Modified by: vicent
 * @Last Modified time: 2017-08-16 16:53:11
*/

'use strict';
var mongoose = require('mongoose');
var Character = require('./src/models/character');
var express = require('express');
var _ = require('underscore');
var async = require('async');
var bodyParser = require('body-parser');
var compression = require('compression');

var app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 3000);

var io = require('socket.io')(server);

var server = require('http').createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
// app.use()
mongoose.connect('localhost')
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.all("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.get('/api/characters', function(req, res, next) {
  var choices = ['Female', 'Male'];
  var randomGender = _.sample(choices);

  Character.find({ random: { $near: [Math.random(), 0] } })
    .where('voted', false)
    .where('gender', randomGender)
    .limit(2)
    .exec(function(err, characters) {
      if (err) return next(err);

      if (characters.length === 2) {
        return res.send(characters);
      }

      var oppositeGender = _.first(_.without(choices, randomGender));

      Character
        .find({ random: { $near: [Math.random(), 0] } })
        .where('voted', false)
        .where('gender', oppositeGender)
        .limit(2)
        .exec(function(err, characters) {
          if (err) return next(err);

          if (characters.length === 2) {
            return res.send(characters);
          }

          Character.update({}, { $set: { voted: false } }, { multi: true }, function(err) {
            if (err) return next(err);
            res.send([]);
          });
        });
    });
});

// 写在 /api/characters/:id 就500了  什么道理???
app.get('/api/characters/top', function(req, res, next) {
  var params = req.query;
  var conditions = {};

  _.each(params, function(value, key) {
    conditions[key] = new RegExp('^' + value + '$', 'i');
  });

  Character
    .find(conditions)
    .sort('-wins')
    .limit(100)
    .exec(function(err, characters) {
      if (err) return next(err);

      characters.sort(function(a, b) {
        if (a.wins / (a.wins + a.losses) < b.wins / (b.wins + b.losses)) { return 1; }
        if (a.wins / (a.wins + a.losses) > b.wins / (b.wins + b.losses)) { return -1; }
        return 0;
      });

      res.send(characters);
  });
});

// getCharacterDetail
app.get('/api/characters/:id', function(req, res, next) {
  var id = req.params.id;

  Character.findOne({ characterId: id }, function(err, character) {
    if (err) return next(err);

    if (!character) {
      return res.status(404).send({ message: 'Character not found.' });
    }

    res.send(character);
  });
});


app.put('/api/characters', function(req, res, next) {

  var winner = req.body.winner;
  var loser = req.body.loser;

  if (!winner || !loser) {
    return res.status(400).send({ message: 'Voting requires two characters.' });
  }

  if (winner === loser) {
    return res.status(400).send({ message: 'Cannot vote for and against the same character.' });
  }

  async.parallel([
      function(callback) {
        Character.findOne({ characterId: winner }, function(err, winner) {
          callback(err, winner);
        });
      },
      function(callback) {
        Character.findOne({ characterId: loser }, function(err, loser) {
          callback(err, loser);
        });
      }
    ],
    function(err, results) {
      if (err) return next(err);

      var winner = results[0];
      var loser = results[1];

      if (!winner || !loser) {
        return res.status(404).send({ message: 'One of the characters no longer exists.' });
      }

      if (winner.voted || loser.voted) {
        return res.status(200).end();
      }

      async.parallel([
        function(callback) {
          winner.wins++;
          winner.voted = true;
          winner.random = [Math.random(), 0];
          winner.save(function(err) {
            callback(err);
          });
        },
        function(callback) {
          loser.losses++;
          loser.voted = true;
          loser.random = [Math.random(), 0];
          loser.save(function(err) {
            callback(err);
          });
        }
      ], function(err) {
        if (err) return next(err);
        res.status(200).end();
      });
    });
});

var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});