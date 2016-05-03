'use strict';

describe('Horarios E2E Tests:', function () {
  describe('Test Horarios page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/horarios');
      expect(element.all(by.repeater('horario in horarios')).count()).toEqual(0);
    });
  });
});
