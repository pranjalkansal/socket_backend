'use strict';

var base = {};

base.token: {
  secret: 'getAccessTokenKey' + new Date(),
	options: {
    algorithm: 'HS256',
		expiresIn: 1800
	}
};

base.bcrypt: {
  rounds: 10
};

module.exports = base;
