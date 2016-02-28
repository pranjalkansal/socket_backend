'use strict';

const Hapi = require('hapi');
const Plugins = require('./plugins/index.js');
const Routes = require('./routes/index.js');

const server = new Hapi.Server();

sever.connection({
  host: 'localhost',
  port: 5000
});

server.register(Pluigns, function (error) {
  error?(server.log(['error'], 'Plugins loading error!!')):(server.log(['start'], 'Plugins loaded successfully!!'));
});

Routes.forEach(function (route) {
  server.route(route);
});

server.start(function (error) {
  error?(console.log(error)):(console.log('Server running at: ' + server.info.uri));
});
