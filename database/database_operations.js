'use strict';

const Config = require('../config/index.js');
const Mongoose = require('./mongo.js');
const Schema = Mongoose.Schema;

var database_queries = {};

database_queries.find: function (model, data, projection) {
	model.find(data, projection, function (error, response) {
		if(error) {
			return Config.Database.query.error;
		}
		return response;
	});
};

module.exports = database_queries;
