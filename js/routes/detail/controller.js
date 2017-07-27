angular.module('mainApp')

.controller('detailController', function ($scope, $routeParams, dataService) {
  var detId = $routeParams.detId
  // $scope.catId = $routeParams.catId
  // $scope.subId = $routeParams.subId

  $scope.section = 'Antojo de '

  dataService.getVenueDetails(detId)
    .then(function (detId) {
      $scope.venueDetail = detId.data.response.venue
      console.log(detId)
    })
})
