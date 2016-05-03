//Horarios service used to communicate Horarios REST endpoints
(function () {
  'use strict';

  angular
    .module('horarios')
    .factory('HorariosService', HorariosService);

  HorariosService.$inject = ['$resource'];

  function HorariosService($resource) {
    return $resource('api/horarios/:horarioId', {
      horarioId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();
