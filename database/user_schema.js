'use strict';

const Mongoose = require('./mongo.js');
const Schema = Mongoose.Schema;

var user_queries = {};

user_queries.register: new Schema({
	username: {type: String, unique: true},
	online: {type: Boolean, default: 0},
	created_on: {type: Date},
	last_login: {type: Date, default: new Date()}
});

module.exports = user_queries;
