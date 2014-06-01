'use strict';
angular.module('ShelterconnectIonic.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, Shelter) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = Shelter.query();
  $scope.map = {
      center: {
        latitude: 39,
        longitude: -101
      },
      zoom: 10
    };
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, Shelter) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = Shelter.get({id:$stateParams.id});
  $scope.map = {
      center: {
        latitude: 39,
        longitude: -101
      },
      zoom: 10
    };
});
