(function () {
  'use strict';

  angular
    .module('horarios')
    .controller('HorariosListController', HorariosListController);

  HorariosListController.$inject = ['HorariosService'];

  function HorariosListController(HorariosService) {
    var vm = this;

    vm.horarios = HorariosService.query();
  }
})();
