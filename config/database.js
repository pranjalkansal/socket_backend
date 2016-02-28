'use strict';

var database = {};

database.connection: {
  error: 'Oops, error in connecting database!!',
	success: 'Database connection established!!'
};

database.entry: {
	error: 'Error occured while making entry in database due to: ',
	success: 'Database entry created'
};

database.query: {
	error: 'Error occured while executing database query!!',
	success: 'Database query executed successfully!!'
};

module.exports = database;
