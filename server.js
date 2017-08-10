/*
* @Author: vicent
* @Date:   2017-08-09 17:35:27
 * @Last Modified by:   vicent
 * @Last Modified time: 2017-08-10 11:20:46
*/

'use strict';
var mongoose = require('mongoose');
var Character = require('./src/models/character');
var express = require('express');
var _ = require('underscore');

var app = express();
app.set('port', process.env.PORT || 3000);
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
