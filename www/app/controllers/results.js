define([
  'app',
  'services/event',
  'directives/googleMaps'
], function (app) {
  'use strict';

  app.controller('ResultsCtrl', [
    '$scope',
    '$stateParams',
    '$state',
    '$timeout',
    '$ionicHistory',
    'eventService',
    '$ionicLoading',
    function ($scope, $stateParams, $state, $timeout, $ionicHistory, eventService, $ionicLoading) {
      var first = true;
      $scope.limit = 10;
      $scope.show = {
        list: false
      };

      // show next 10
      $scope.loadMore = function () {
        if (!first) {
          $timeout(function () {
            $scope.limit += 10;
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, 2000);
          return;
        }
        first = false;

        var wheelChair = $stateParams.wheelChair === 'true',
            wheelChairLift = $stateParams.wheelChairLift === 'true',
            search = $stateParams.search;

        if (wheelChair !== $scope.wheelChair || wheelChairLift !== $scope.wheelChairLift || search !== $scope.search) {
          $scope.wheelChair = wheelChair;
          $scope.wheelChairLift = wheelChairLift;
          $scope.search = search;
          $scope.loading = true;
          eventService.search().then(function (events) {
            $scope.baseEvent = events[0];
            $scope.limit = 10;
            $scope.events = events;
          }).finally(function () {
            $scope.loading = false;
            $scope.$broadcast('scroll.infiniteScrollComplete');
          });
        } else {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        }
      };

      $scope.reload = function () {
        $scope.loading = true;
        eventService.search().then(function (events) {
          $scope.baseEvent = events[0];
          $scope.limit = 10;
          $scope.events = events;
        }).finally(function () {
          $scope.loading = false;
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.goToMap = function () {
        $ionicHistory.currentView($ionicHistory.backView());
        $ionicHistory.nextViewOptions({
          disableAnimate: true
        });
        $state.go('results.map', {
          search: $scope.string,
          wheelChair: $scope.wheelChair,
          wheelChairLift: $scope.wheelChairLift
        });
      };
      $scope.goToList = function () {
        $ionicHistory.currentView($ionicHistory.backView());
        $ionicHistory.nextViewOptions({
          disableAnimate: true
        });
        $state.go('results.list', {
          search: $scope.search,
          wheelChair: $scope.wheelChair,
          wheelChairLift: $scope.wheelChairLift
        });
      };
      $scope.baseEventId = null;

      $scope.$watch('baseEventId', function() {
        if($scope.baseEventId != null){
          eventService.getOne($scope.baseEventId).then(function (event) {
            $scope.baseEvent = event;
          });
        }
      });

      $scope.discoverWasHidden = false;
      $scope.showDiv = false;

      $scope.hideDiscover = function () {
        $scope.hideDiv=true;
        $scope.showDiv=true;

        $scope.discoverWasHidden = true;
      };

      $scope.showDiscover = function () {
        $scope.hideDiv=false;
        $scope.showDiv=false;

        $scope.discoverWasHidden = false;
      };


      $scope.switchDiscover = function () {

        if($scope.hideDiv == true && $scope.discoverWasHidden != true){
          $scope.hideDiv=false;
        }
        else{
          $scope.hideDiv=true;
        }

        if($scope.showDiv == false && $scope.discoverWasHidden == true){
          $scope.showDiv=true;
        }
        else{
          $scope.showDiv=false;
        }
      };


      $scope.$on('$ionicView.enter', function(e) {
        var deleteLink = document.querySelectorAll('.loading-container');
        /*var x = document.getElementsByClassName("loading-container");*/

        for (var i = 0; i < deleteLink.length; i++) {
          deleteLink[i].addEventListener('click', function(event) {
            $ionicLoading.hide();
          });
        }
      });


      $scope.showOverlayDicover = function() {
        $ionicLoading.show({
          templateUrl: '/app/templates/overlayDiscover.html',
          scope: $scope
        });

        setTimeout(function() {
          var deleteLink = document.querySelectorAll('.loading-container');
          /*var x = document.getElementsByClassName("loading-container");*/


          for (var i = 0; i < deleteLink.length; i++) {
            deleteLink[i].addEventListener('click', function(event) {
              $ionicLoading.hide();
            });
          }
        }, 1000);



          /*x.addEventListener('click', function() {
            $ionicLoading.hide();
          });*/
        };

      $scope.hideOverlayDicover = function(){
        $ionicLoading.hide();
      };

    }
  ]);
});
