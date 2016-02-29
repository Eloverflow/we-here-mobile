define([
  'app',
  'services/page'
], function (app) {
  'use strict';

  app.controller('AppCtrl', [
    '$scope',
    '$ionicModal',
    '$ionicScrollDelegate',
    '$sce',
    'pageService',
    '$ionicLoading',
    function ($scope, $ionicModal, $ionicScrollDelegate, $sce, pageService, $ionicLoading) {
      $scope.ready = true;

      $scope.pay = function() {
        $ionicLoading.show({
          templateUrl: 'app/templates/pay.html',
          scope: $scope
        });
      };

      $scope.hideOverlay = function(){
        $ionicLoading.hide();
        //Fermer le panneau

      };


      pageService.get().then(function (pages) {
        $scope.pages = pages;
      });

      $ionicModal.fromTemplateUrl('app/templates/page.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
      });

      $scope.openModal = function (index) {
        var notEqual = index !== $scope.currentPage;
        if (notEqual) {
          $scope.opening = true;
          $scope.currentPage = index;
        }
        $scope.modal.show().then(function () {
          if (notEqual) {
            $ionicScrollDelegate.$getByHandle('modal').scrollTop();
          }
          $scope.opening = false;
        });
      };

      $scope.trustHtml = function (html) {
        return $sce.trustAsHtml(html);
      };

      $scope.closeModal = function () {
        $scope.modal.hide();
      };
    }
  ]);
});
