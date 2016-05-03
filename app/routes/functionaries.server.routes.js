'use strict';

module.exports = function(app) {
	var users = require('../controllers/users.server.controller.js');
	var functionaries = require('../controllers/functionaries.server.controller.js');

	// Functionaries Routes
	app.route('/functionaries')
		.get(functionaries.list)
		.post(users.requiresLogin, functionaries.create);

	app.route('/functionaries/:functionaryId')
		.get(functionaries.read)
		.put(users.requiresLogin, functionaries.update)
		.delete(users.requiresLogin, functionaries.delete);

	// Finish by binding the Functionary middleware
	app.param('functionaryId', functionaries.functionaryByID);
};
