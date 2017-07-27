angular.module('mainApp')

.controller('detailController', function ($scope, $routeParams, dataService) {
  var detId = $routeParams.detId
  $scope.catId = $routeParams.catId
  $scope.subId = $routeParams.subId
  $scope.section = 'Antojo de '

  dataService.getVenueDetails(detId)
    .then(function (detId) {
      console.log(detId.data.response.venue)
      if(detId.data.response.venue.bestPhoto){
        var imgPre = detId.data.response.venue.bestPhoto.prefix
        var imgSuf = 'original' + detId.data.response.venue.bestPhoto.suffix
        var imgUrl = imgPre + imgSuf
      }else{
        var imgUrl = 'http://www.hdfondos.eu/pictures/2015/0409/1/restaurant-wallpaper-332136.jpg'
      }

      $scope.venueDetail = detId.data.response.venue
      $scope.imgUrl = imgUrl
      
    })
})
