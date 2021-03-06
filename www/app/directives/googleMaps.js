/* globals define, document */
define([
  'app'
], function (app) {
  'use strict';

  app.directive('googleMap', [
    '$state',
    '$window',
    function ($state, $window) {
      return {
        scope: {
          events: '=',
          apiKey: '@',
          baseEventId: "="
        },
        restrict: 'A',
        link: function (scope, element) {
          var counter = 0,
              map,
              eventsReady = false;

          function addClick(marker, id) {
            $window.google.maps.event.addListener(marker, 'click', function () {
              scope.baseEventId = id;
              scope.$apply();
            });
          }

          function makeMarkers() {
            if (eventsReady || !scope.events) {
              return;
            }
            eventsReady = true;

            var i = 0,
                mapsMarker;
            for (i; i < scope.events.length; i = i + 1) {
              mapsMarker = new $window.google.maps.Marker({
                  position: new $window.google.maps.LatLng(scope.events[i].lat, scope.events[i].lng),
                  map: map,
                  clickable: true
              });
              // center on first hit
              if (!i) {
                map.setCenter(new $window.google.maps.LatLng(46.345672, -72.573886));
              }
              addClick(mapsMarker, scope.events[i].id);
            }
          }

          var watcher = scope.$watch(function () {
            return scope.events;
          }, function (events) {
            if (events && events.length) {
              if (map) {
                makeMarkers();
              }
              watcher();
            }
          });

          function makeMapAndMarkers() {
            var mapOptions = {
                zoom: 13,
                disableDefaultUI: true
            };
            if (!map) {
              map = new $window.google.maps.Map(element[0], mapOptions);

              var circle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0,
                map: map,
                radius: 3000,
                center: {lat: 46.345672, lng: -72.573886}
              });
            }
            makeMarkers();
          }

          //load google maps api script async, avoiding 'document.write' error
          function injectGoogle() {
            var cbId,
                wf,
                s,
                apiKey;

            //callback id
            cbId = '_gmap_' + counter;
            $window[cbId] = makeMapAndMarkers;
            apiKey = 'key=' + scope.apiKey + '&';
            wf = document.createElement('script');
            wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
                 '://maps.googleapis.com/maps/api/js?' + apiKey + 'v=3&sensor=true&callback=' + cbId;
            wf.type = 'text/javascript';
            wf.async = 'true';
            document.body.appendChild(wf);
          }

          if (!$window.google) {
            counter += 1;
            injectGoogle();
          } else {
            makeMapAndMarkers();
          }
        }
      };
    }
  ]);
});
