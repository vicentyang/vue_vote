/*
* @Author: vicent
* @Date:   2017-08-09 17:38:56
* @Last Modified by:   vicent
* @Last Modified time: 2017-08-09 17:39:08
*/

'use strict';

var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
  characterId: { type: String, unique: true, index: true },
  name: String,
  race: String,
  gender: String,
  bloodline: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  reports: { type: Number, default: 0 },
  random: { type: [Number], index: '2d' },
  voted: { type: Boolean, default: false }
});

module.exports = mongoose.model('newedenfaces', characterSchema);
