'use strict;'

var QueriesSchema = require('./document_schema.js');
var UserQueries = require('./user_schema.js');
var Operations = require('./database_operations.js');

module.exports = {query: QueriesSchema, user_query: UserQueries, operation: Operations};
