'use strict';

const Joi = require('joi');
const Controllers = require('../controllers/index.js');

var register = {
  method: 'POST',
  path: 'user/register',
  config: {
    tags: ['api'],
    description: 'User registeration',
    notes: 'Register your username by which you want to chat.',
    validate: {
      payload: {
        username: Joi.string().alphanum().required()
      }
    }
  },
  handler: Controllers.user_register
};

var user_routes = [register];
module.exports = user_routes;
