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
      var self = this;

      $scope.categories = [];
      $scope.moods = [];
      $scope.times = [];

      this.loadData = function() {
        $scope.categories = dataService.categories;
        $scope.moods = dataService.moods;
        $scope.times = dataService.times;
      };

      this.loadData();

      $scope.toggleCategory = function(category) {
        category.isActive = !category.isActive;

        self.setFiltersInCache();
      };

      $scope.toggleMood = function(mood) {
        mood.isActive = !mood.isActive;

        self.setFiltersInCache();
      };

      $scope.toggleTime = function(time) {
        time.isActive = !time.isActive;

        self.setFiltersInCache();
      };

      this.setFiltersInCache = function() {
        var filters = [];

        for(var i = 0; i < $scope.categories.length ; i++) {
          if($scope.categories[i].isActive) {
            filters.push($scope.categories[i].name);
          }
        }

        for(var j = 0; j < $scope.moods.length ; j++) {
          if($scope.moods[j].isActive) {
            filters.push($scope.moods[j].name);
          }
        }

        for(var k = 0; k < $scope.times.length ; k++) {
          if($scope.times[k].isActive) {
            filters.push($scope.times[k].name);
          }
        }

        window.localStorage['filters'] = filters;
      };
    }
  ]);
});
