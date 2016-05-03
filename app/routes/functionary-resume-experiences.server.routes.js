'use strict';

module.exports = function(app) {
	var users = require('../controllers/users.server.controller.js');
	var functionaryResumeExperiences = require('../controllers/functionary-resume-experiences.server.controller.js');

	// Functionary resume experiences Routes
	app.route('/functionary-resume-experiences')
		.get(functionaryResumeExperiences.list)
		.post(users.requiresLogin, functionaryResumeExperiences.create);

	app.route('/functionary-resume-experiences/:functionaryResumeExperienceId')
		.get(functionaryResumeExperiences.read)
		.put(users.requiresLogin, functionaryResumeExperiences.hasAuthorization, functionaryResumeExperiences.update)
		.delete(users.requiresLogin, functionaryResumeExperiences.hasAuthorization, functionaryResumeExperiences.delete);

	// Finish by binding the Functionary resume experience middleware
	app.param('functionaryResumeExperienceId', functionaryResumeExperiences.functionaryResumeExperienceByID);
};
