'use strict';

/**
 * Module dependencies
 */
var horariosPolicy = require('../policies/horarios.server.policy'),
  horarios = require('../controllers/horarios.server.controller');

module.exports = function(app) {
  // Horarios Routes
  app.route('/api/horarios').all(horariosPolicy.isAllowed)
    .get(horarios.list)
    .post(horarios.create);

  app.route('/api/horarios/:horarioId').all(horariosPolicy.isAllowed)
    .get(horarios.read)
    .put(horarios.update)
    .delete(horarios.delete);

  // Finish by binding the Horario middleware
  app.param('horarioId', horarios.horarioByID);
};
