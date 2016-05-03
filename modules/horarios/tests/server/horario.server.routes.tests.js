'use strict';

var should = require('should'),
  request = require('supertest'),
  path = require('path'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Horario = mongoose.model('Horario'),
  express = require(path.resolve('./config/lib/express'));

/**
 * Globals
 */
var app, agent, credentials, user, horario;

/**
 * Horario routes tests
 */
describe('Horario CRUD tests', function () {

  before(function (done) {
    // Get application
    app = express.init(mongoose);
    agent = request.agent(app);

    done();
  });

  beforeEach(function (done) {
    // Create user credentials
    credentials = {
      username: 'username',
      password: 'M3@n.jsI$Aw3$0m3'
    };

    // Create a new user
    user = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: credentials.username,
      password: credentials.password,
      provider: 'local'
    });

    // Save a user to the test db and create new Horario
    user.save(function () {
      horario = {
        name: 'Horario name'
      };

      done();
    });
  });

  it('should be able to save a Horario if logged in', function (done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new Horario
        agent.post('/api/horarios')
          .send(horario)
          .expect(200)
          .end(function (horarioSaveErr, horarioSaveRes) {
            // Handle Horario save error
            if (horarioSaveErr) {
              return done(horarioSaveErr);
            }

            // Get a list of Horarios
            agent.get('/api/horarios')
              .end(function (horariosGetErr, horariosGetRes) {
                // Handle Horario save error
                if (horariosGetErr) {
                  return done(horariosGetErr);
                }

                // Get Horarios list
                var horarios = horariosGetRes.body;

                // Set assertions
                (horarios[0].user._id).should.equal(userId);
                (horarios[0].name).should.match('Horario name');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should not be able to save an Horario if not logged in', function (done) {
    agent.post('/api/horarios')
      .send(horario)
      .expect(403)
      .end(function (horarioSaveErr, horarioSaveRes) {
        // Call the assertion callback
        done(horarioSaveErr);
      });
  });

  it('should not be able to save an Horario if no name is provided', function (done) {
    // Invalidate name field
    horario.name = '';

    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new Horario
        agent.post('/api/horarios')
          .send(horario)
          .expect(400)
          .end(function (horarioSaveErr, horarioSaveRes) {
            // Set message assertion
            (horarioSaveRes.body.message).should.match('Please fill Horario name');

            // Handle Horario save error
            done(horarioSaveErr);
          });
      });
  });

  it('should be able to update an Horario if signed in', function (done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new Horario
        agent.post('/api/horarios')
          .send(horario)
          .expect(200)
          .end(function (horarioSaveErr, horarioSaveRes) {
            // Handle Horario save error
            if (horarioSaveErr) {
              return done(horarioSaveErr);
            }

            // Update Horario name
            horario.name = 'WHY YOU GOTTA BE SO MEAN?';

            // Update an existing Horario
            agent.put('/api/horarios/' + horarioSaveRes.body._id)
              .send(horario)
              .expect(200)
              .end(function (horarioUpdateErr, horarioUpdateRes) {
                // Handle Horario update error
                if (horarioUpdateErr) {
                  return done(horarioUpdateErr);
                }

                // Set assertions
                (horarioUpdateRes.body._id).should.equal(horarioSaveRes.body._id);
                (horarioUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should be able to get a list of Horarios if not signed in', function (done) {
    // Create new Horario model instance
    var horarioObj = new Horario(horario);

    // Save the horario
    horarioObj.save(function () {
      // Request Horarios
      request(app).get('/api/horarios')
        .end(function (req, res) {
          // Set assertion
          res.body.should.be.instanceof(Array).and.have.lengthOf(1);

          // Call the assertion callback
          done();
        });

    });
  });

  it('should be able to get a single Horario if not signed in', function (done) {
    // Create new Horario model instance
    var horarioObj = new Horario(horario);

    // Save the Horario
    horarioObj.save(function () {
      request(app).get('/api/horarios/' + horarioObj._id)
        .end(function (req, res) {
          // Set assertion
          res.body.should.be.instanceof(Object).and.have.property('name', horario.name);

          // Call the assertion callback
          done();
        });
    });
  });

  it('should return proper error for single Horario with an invalid Id, if not signed in', function (done) {
    // test is not a valid mongoose Id
    request(app).get('/api/horarios/test')
      .end(function (req, res) {
        // Set assertion
        res.body.should.be.instanceof(Object).and.have.property('message', 'Horario is invalid');

        // Call the assertion callback
        done();
      });
  });

  it('should return proper error for single Horario which doesnt exist, if not signed in', function (done) {
    // This is a valid mongoose Id but a non-existent Horario
    request(app).get('/api/horarios/559e9cd815f80b4c256a8f41')
      .end(function (req, res) {
        // Set assertion
        res.body.should.be.instanceof(Object).and.have.property('message', 'No Horario with that identifier has been found');

        // Call the assertion callback
        done();
      });
  });

  it('should be able to delete an Horario if signed in', function (done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new Horario
        agent.post('/api/horarios')
          .send(horario)
          .expect(200)
          .end(function (horarioSaveErr, horarioSaveRes) {
            // Handle Horario save error
            if (horarioSaveErr) {
              return done(horarioSaveErr);
            }

            // Delete an existing Horario
            agent.delete('/api/horarios/' + horarioSaveRes.body._id)
              .send(horario)
              .expect(200)
              .end(function (horarioDeleteErr, horarioDeleteRes) {
                // Handle horario error error
                if (horarioDeleteErr) {
                  return done(horarioDeleteErr);
                }

                // Set assertions
                (horarioDeleteRes.body._id).should.equal(horarioSaveRes.body._id);

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should not be able to delete an Horario if not signed in', function (done) {
    // Set Horario user
    horario.user = user;

    // Create new Horario model instance
    var horarioObj = new Horario(horario);

    // Save the Horario
    horarioObj.save(function () {
      // Try deleting Horario
      request(app).delete('/api/horarios/' + horarioObj._id)
        .expect(403)
        .end(function (horarioDeleteErr, horarioDeleteRes) {
          // Set message assertion
          (horarioDeleteRes.body.message).should.match('User is not authorized');

          // Handle Horario error error
          done(horarioDeleteErr);
        });

    });
  });

  it('should be able to get a single Horario that has an orphaned user reference', function (done) {
    // Create orphan user creds
    var _creds = {
      username: 'orphan',
      password: 'M3@n.jsI$Aw3$0m3'
    };

    // Create orphan user
    var _orphan = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'orphan@test.com',
      username: _creds.username,
      password: _creds.password,
      provider: 'local'
    });

    _orphan.save(function (err, orphan) {
      // Handle save error
      if (err) {
        return done(err);
      }

      agent.post('/api/auth/signin')
        .send(_creds)
        .expect(200)
        .end(function (signinErr, signinRes) {
          // Handle signin error
          if (signinErr) {
            return done(signinErr);
          }

          // Get the userId
          var orphanId = orphan._id;

          // Save a new Horario
          agent.post('/api/horarios')
            .send(horario)
            .expect(200)
            .end(function (horarioSaveErr, horarioSaveRes) {
              // Handle Horario save error
              if (horarioSaveErr) {
                return done(horarioSaveErr);
              }

              // Set assertions on new Horario
              (horarioSaveRes.body.name).should.equal(horario.name);
              should.exist(horarioSaveRes.body.user);
              should.equal(horarioSaveRes.body.user._id, orphanId);

              // force the Horario to have an orphaned user reference
              orphan.remove(function () {
                // now signin with valid user
                agent.post('/api/auth/signin')
                  .send(credentials)
                  .expect(200)
                  .end(function (err, res) {
                    // Handle signin error
                    if (err) {
                      return done(err);
                    }

                    // Get the Horario
                    agent.get('/api/horarios/' + horarioSaveRes.body._id)
                      .expect(200)
                      .end(function (horarioInfoErr, horarioInfoRes) {
                        // Handle Horario error
                        if (horarioInfoErr) {
                          return done(horarioInfoErr);
                        }

                        // Set assertions
                        (horarioInfoRes.body._id).should.equal(horarioSaveRes.body._id);
                        (horarioInfoRes.body.name).should.equal(horario.name);
                        should.equal(horarioInfoRes.body.user, undefined);

                        // Call the assertion callback
                        done();
                      });
                  });
              });
            });
        });
    });
  });

  afterEach(function (done) {
    User.remove().exec(function () {
      Horario.remove().exec(done);
    });
  });
});
