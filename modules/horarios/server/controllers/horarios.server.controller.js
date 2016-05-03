'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Horario = mongoose.model('Horario'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Horario
 */
exports.create = function(req, res) {
  var horario = new Horario(req.body);
  horario.user = req.user;

  horario.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(horario);
    }
  });
};

/**
 * Show the current Horario
 */
exports.read = function(req, res) {
  // convert mongoose document to JSON
  var horario = req.horario ? req.horario.toJSON() : {};

  // Add a custom field to the Article, for determining if the current User is the "owner".
  // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
  horario.isCurrentUserOwner = req.user && horario.user && horario.user._id.toString() === req.user._id.toString() ? true : false;

  res.jsonp(horario);
};

/**
 * Update a Horario
 */
exports.update = function(req, res) {
  var horario = req.horario ;

  horario = _.extend(horario , req.body);

  horario.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(horario);
    }
  });
};

/**
 * Delete an Horario
 */
exports.delete = function(req, res) {
  var horario = req.horario ;

  horario.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(horario);
    }
  });
};

/**
 * List of Horarios
 */
exports.list = function(req, res) { 
  Horario.find().sort('-created').populate('user', 'displayName').exec(function(err, horarios) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(horarios);
    }
  });
};

/**
 * Horario middleware
 */
exports.horarioByID = function(req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Horario is invalid'
    });
  }

  Horario.findById(id).populate('user', 'displayName').exec(function (err, horario) {
    if (err) {
      return next(err);
    } else if (!horario) {
      return res.status(404).send({
        message: 'No Horario with that identifier has been found'
      });
    }
    req.horario = horario;
    next();
  });
};
