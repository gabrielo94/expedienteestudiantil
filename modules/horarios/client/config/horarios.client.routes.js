(function () {
  'use strict';

  angular
    .module('horarios')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('horarios', {
        abstract: true,
        url: '/horarios',
        template: '<ui-view/>'
      })
      .state('horarios.list', {
        url: '',
        templateUrl: 'modules/horarios/client/views/list-horarios.client.view.html',
        controller: 'HorariosListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Horarios List'
        }
      })
      .state('horarios.create', {
        url: '/create',
        templateUrl: 'modules/horarios/client/views/form-horario.client.view.html',
        controller: 'HorariosController',
        controllerAs: 'vm',
        resolve: {
          horarioResolve: newHorario
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle : 'Horarios Create'
        }
      })
      .state('horarios.edit', {
        url: '/:horarioId/edit',
        templateUrl: 'modules/horarios/client/views/form-horario.client.view.html',
        controller: 'HorariosController',
        controllerAs: 'vm',
        resolve: {
          horarioResolve: getHorario
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Horario {{ horarioResolve.name }}'
        }
      })
      .state('horarios.view', {
        url: '/:horarioId',
        templateUrl: 'modules/horarios/client/views/view-horario.client.view.html',
        controller: 'HorariosController',
        controllerAs: 'vm',
        resolve: {
          horarioResolve: getHorario
        },
        data:{
          pageTitle: 'Horario {{ articleResolve.name }}'
        }
      });
  }

  getHorario.$inject = ['$stateParams', 'HorariosService'];

  function getHorario($stateParams, HorariosService) {
    return HorariosService.get({
      horarioId: $stateParams.horarioId
    }).$promise;
  }

  newHorario.$inject = ['HorariosService'];

  function newHorario(HorariosService) {
    return new HorariosService();
  }
})();
