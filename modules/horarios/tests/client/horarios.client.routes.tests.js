(function () {
  'use strict';

  describe('Horarios Route Tests', function () {
    // Initialize global variables
    var $scope,
      HorariosService;

    //We can start by loading the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function ($rootScope, _HorariosService_) {
      // Set a new global scope
      $scope = $rootScope.$new();
      HorariosService = _HorariosService_;
    }));

    describe('Route Config', function () {
      describe('Main Route', function () {
        var mainstate;
        beforeEach(inject(function ($state) {
          mainstate = $state.get('horarios');
        }));

        it('Should have the correct URL', function () {
          expect(mainstate.url).toEqual('/horarios');
        });

        it('Should be abstract', function () {
          expect(mainstate.abstract).toBe(true);
        });

        it('Should have template', function () {
          expect(mainstate.template).toBe('<ui-view/>');
        });
      });

      describe('View Route', function () {
        var viewstate,
          HorariosController,
          mockHorario;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          viewstate = $state.get('horarios.view');
          $templateCache.put('modules/horarios/client/views/view-horario.client.view.html', '');

          // create mock Horario
          mockHorario = new HorariosService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Horario Name'
          });

          //Initialize Controller
          HorariosController = $controller('HorariosController as vm', {
            $scope: $scope,
            horarioResolve: mockHorario
          });
        }));

        it('Should have the correct URL', function () {
          expect(viewstate.url).toEqual('/:horarioId');
        });

        it('Should have a resolve function', function () {
          expect(typeof viewstate.resolve).toEqual('object');
          expect(typeof viewstate.resolve.horarioResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(viewstate, {
            horarioId: 1
          })).toEqual('/horarios/1');
        }));

        it('should attach an Horario to the controller scope', function () {
          expect($scope.vm.horario._id).toBe(mockHorario._id);
        });

        it('Should not be abstract', function () {
          expect(viewstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(viewstate.templateUrl).toBe('modules/horarios/client/views/view-horario.client.view.html');
        });
      });

      describe('Create Route', function () {
        var createstate,
          HorariosController,
          mockHorario;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          createstate = $state.get('horarios.create');
          $templateCache.put('modules/horarios/client/views/form-horario.client.view.html', '');

          // create mock Horario
          mockHorario = new HorariosService();

          //Initialize Controller
          HorariosController = $controller('HorariosController as vm', {
            $scope: $scope,
            horarioResolve: mockHorario
          });
        }));

        it('Should have the correct URL', function () {
          expect(createstate.url).toEqual('/create');
        });

        it('Should have a resolve function', function () {
          expect(typeof createstate.resolve).toEqual('object');
          expect(typeof createstate.resolve.horarioResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(createstate)).toEqual('/horarios/create');
        }));

        it('should attach an Horario to the controller scope', function () {
          expect($scope.vm.horario._id).toBe(mockHorario._id);
          expect($scope.vm.horario._id).toBe(undefined);
        });

        it('Should not be abstract', function () {
          expect(createstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(createstate.templateUrl).toBe('modules/horarios/client/views/form-horario.client.view.html');
        });
      });

      describe('Edit Route', function () {
        var editstate,
          HorariosController,
          mockHorario;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          editstate = $state.get('horarios.edit');
          $templateCache.put('modules/horarios/client/views/form-horario.client.view.html', '');

          // create mock Horario
          mockHorario = new HorariosService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Horario Name'
          });

          //Initialize Controller
          HorariosController = $controller('HorariosController as vm', {
            $scope: $scope,
            horarioResolve: mockHorario
          });
        }));

        it('Should have the correct URL', function () {
          expect(editstate.url).toEqual('/:horarioId/edit');
        });

        it('Should have a resolve function', function () {
          expect(typeof editstate.resolve).toEqual('object');
          expect(typeof editstate.resolve.horarioResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(editstate, {
            horarioId: 1
          })).toEqual('/horarios/1/edit');
        }));

        it('should attach an Horario to the controller scope', function () {
          expect($scope.vm.horario._id).toBe(mockHorario._id);
        });

        it('Should not be abstract', function () {
          expect(editstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(editstate.templateUrl).toBe('modules/horarios/client/views/form-horario.client.view.html');
        });

        xit('Should go to unauthorized route', function () {

        });
      });

    });
  });
})();
