(function () {
  'use strict';

  // Horarios controller
  angular
    .module('horarios')
    .controller('HorariosController', HorariosController);

  HorariosController.$inject = ['$scope', '$state', 'Authentication', 'horarioResolve'];

  function HorariosController ($scope, $state, Authentication, horario) {
    var vm = this;

    vm.authentication = Authentication;
    vm.horario = horario;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Horario
    function remove() {
      if (confirm('Are you sure you want to delete?')) {
        vm.horario.$remove($state.go('horarios.list'));
      }
    }

    // Save Horario
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.horarioForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.horario._id) {
        vm.horario.$update(successCallback, errorCallback);
      } else {
        vm.horario.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('horarios.view', {
          horarioId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
})();
