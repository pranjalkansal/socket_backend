'use strict';

const JWT = require('jsonwebtoken');

const Config = require('../config/index.js');
const Mongoose = require('../database/mongo.js');
const Schema = require('../database/index.js');

var user_controller = {};

var vaildate_username = function (username) {
  var pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(username);
};

user_controller.user_register = function (request, reply) {
  if(validate_username(request.payload.username)) {
    let User = Mongoose.model('users', Schema.user_query.register);
    let user_regiter = new User({request.payload.username, 1});
    user_regiter.save(function (error) {}); // Register new user
  }
  else {
    return reply(Config.Message.user.request.error);
  }
};
