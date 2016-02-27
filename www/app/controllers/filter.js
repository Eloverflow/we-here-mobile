define([
  'app',
  'services/data',
], function (app) {
  'use strict';

  app.controller('FilterCtrl', [
    '$scope',
    '$stateParams',
    '$state',
    '$timeout',
    '$ionicHistory',
    'dataService',
    function ($scope, $stateParams, $state, $timeout, $ionicHistory, dataService) {

      $scope.categories = [];
      for (var i=0; i<10; i++) {
        $scope.categories[i] = {
          name: i,
          items: [],
          show: false
        };
        for (var j=0; j<3; j++) {
          $scope.categories[i].items.push(i + '-' + j);
        }
      }

      $scope.moods = [];
      for (var i=0; i<10; i++) {
        $scope.moods[i] = {
          name: i,
          items: [],
          show: false
        };
        for (var j=0; j<3; j++) {
          $scope.moods[i].items.push(i + '-' + j);
        }
      }

      $scope.activities = [];
      for (var i=0; i<10; i++) {
        $scope.activities[i] = {
          name: i,
          items: [],
          show: false
        };
        for (var j=0; j<3; j++) {
          $scope.activities[i].items.push(i + '-' + j);
        }
      }

      /*
       * if given group is the selected group, deselect it
       * else, select the given group
       */
      $scope.toggleGroup = function(panel) {
        panel.show = !panel.show;
      };
      $scope.isGroupShown = function(panel) {
        return panel.show;
      };
    }
  ]);
});
