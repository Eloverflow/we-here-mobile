define([
  'app',
  'services/data'
], function (app) {
  'use strict';

  app.service('eventService', [
    '$q',
    '$timeout',
    'dataService',
    function ($q, $timeout, dataService) {
      var self = this;

      this.search = function () {
        var events = dataService.events,
            deferred = $q.defer(),
            founds = [],
            currentEvent,
            i = 0;


        var filters = window.localStorage['filters'].split(",");

        for (i; i < events.length; i = i + 1) {
          currentEvent = events[i];
          if(self.hasFilter(filters, currentEvent.filters)) {
            currentEvent.thumb = 'http://lorempixel.com/200/200/nightlife/?' + ((new Date()).getTime() + i);
            founds.push(currentEvent);
          }
        }
        // simulate asynchronous requests
        $timeout(function () {
          if(founds.length === 0) {
            founds = events;
            for(var i = 0; i < founds.length; i++) {
              founds[i].thumb = 'http://lorempixel.com/200/200/nightlife/?' + ((new Date()).getTime() + i)
            }
          }
          deferred.resolve(angular.copy(founds));
        }, 2000);

        return deferred.promise;
      };

      this.hasFilter = function(filters, currentEvent) {
        var ret = [];
        for (var i = 0; i < filters.length; i++) {
          for (var z = 0; z < currentEvent.length; z++) {
            if (filters[i] == currentEvent[z]) {
              ret.push(i);
              break;
            }
          }
        }
        return ret.length > 0;
      };

      this.getNext = function () {
        var deferred = $q.defer(),
            events = [],
            i = 0;

        for (i; i < dataService.events.length; i = i + 1) {
          if (i === 5) {
            break;
          }
          dataService.events[i].thumb = 'http://lorempixel.com/200/200/nightlife/?' + ((new Date()).getTime() + i);
          events.push(dataService.events[i]);
        }

        $timeout(function () {
          deferred.resolve(events);
        }, 1000);

        return deferred.promise;
      };

      this.getOne = function (id) {
        var deferred = $q.defer(),
            event,
            i = 0;

        for (i; i < dataService.events.length; i = i + 1) {
          if (dataService.events[i].id.toString() === id.toString()) {
            event = angular.copy(dataService.events[i]);
            event.image = 'http://lorempixel.com/620/480/nightlife/?' + ((new Date()).getTime() + i);
            break;
          }
        }

        $timeout(function () {
          if (event) {
            deferred.resolve(event);
          } else {
            deferred.reject();
          }
        }, 0);

        return deferred.promise;
      };
    }
  ]);
});
