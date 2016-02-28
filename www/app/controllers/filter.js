/* global ionic, define */
define([
  'app',
  'services/data'
], function (app) {
  'use strict';

  app.controller('FilterCtrl', [
    '$scope',
    'dataService',
    function ($scope, dataService) {

      $scope.categories = [];
      $scope.moods = [];
      $scope.times = [];

      this.loadData = function() {
        $scope.categories = dataService.categories;
        $scope.moods = dataService.moods;
        $scope.times = dataService.times;
      };

      this.loadData();
    }
  ]);
});
