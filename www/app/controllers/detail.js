/* global ionic, define */
define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DetailCtrl', [
    '$scope',
    '$stateParams',
    '$window',
    '$ionicPopup',
    'eventService',
    '$ionicModal',
    '$ionicScrollDelegate',
    '$sce',
    function ($scope, $stateParams, $window, $ionicPopup, eventService, $ionicModal, $ionicScrollDelegate, $sce) {
      $scope.loading = true;
      eventService.getOne($stateParams.id).then(function (event) {
        $scope.event = event;
      }).finally(function () {
        $scope.loading = false;
      });

      $scope.reload = function () {
        eventService.getOne($stateParams.id).then(function (event) {
          $scope.event = event;
        }).finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.call = function () {
        $window.open('tel:' + $scope.event.contact.tel, '_system');
      };

      $scope.mail = function () {
        $window.open('mailto:' + $scope.event.contact.email, '_system');
      };

      $scope.website = function () {
        $window.open($scope.event.website, '_system');
      };

      $scope.map = function () {
        if (ionic.Platform.isIOS()) {
          $window.open('maps://?q=' + $scope.event.lat + ',' + $scope.event.lng, '_system');
        } else {
          $window.open('geo://0,0?q=' + $scope.event.lat + ',' + $scope.event.lng + '(' + $scope.event.name + '/' + $scope.event.city + ')&z=15', '_system');
        }
      };

      $scope.report = function () {
        $ionicPopup.prompt({
          scope: $scope,
          title: '<span class="energized">Report an issue</span>',
          subTitle: '<span class="stable">What\'s wrong or missing?</span>',
          inputType: 'text',
          inputPlaceholder: ''
        }).then(function (res) {
          if (res) {
            // here connect to backend and send report
          }
        });
      };

      $scope.isFullStar = function(rate, index) {
        return index <= rate;
      };

      $ionicModal.fromTemplateUrl('app/templates/add-rating.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
      });

      $scope.openRatingModal = function() {
        $scope.newRating = null;
        $scope.modal.show().then(function () {
          $ionicScrollDelegate.$getByHandle('modal').scrollTop();
          $scope.opening = false;
        });
      };

      $scope.closeModal = function () {
        $scope.modal.hide();
      };

      $scope.addRating = function(rate, name, comment) {
        var newRating = {
          "rate": rate,
          "name": name,
          "comment": comment
        };
        $scope.event.ratings.push(newRating);
        $scope.closeModal();
      }
    }
  ]);
});
