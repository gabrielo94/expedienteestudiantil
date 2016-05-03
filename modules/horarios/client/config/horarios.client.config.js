(function () {
  'use strict';

  angular
    .module('horarios')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Horarios',
      state: 'horarios',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'horarios', {
      title: 'List Horarios',
      state: 'horarios.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'horarios', {
      title: 'Create Horario',
      state: 'horarios.create',
      roles: ['user']
    });
  }
})();
