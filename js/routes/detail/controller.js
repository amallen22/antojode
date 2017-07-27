angular.module('mainApp')

.controller('detailController', function ($scope, $routeParams, dataService) {
  var detId = $routeParams.detId
  $scope.catId = $routeParams.catId
  $scope.subId = $routeParams.subId

  $scope.section = 'Antojo de '

  dataService.getVenueDetails(detId)
    .then(function (detId) {
    	var imgPre = detId.data.response.venue.bestPhoto.prefix
    	var imgSuf = 'original' + detId.data.response.venue.bestPhoto.suffix
    	var imgUrl = imgPre + imgSuf

      $scope.venueDetail = detId.data.response.venue
      $scope.imgUrl = imgUrl
      console.log(detId.data.response.venue)
    })
})
