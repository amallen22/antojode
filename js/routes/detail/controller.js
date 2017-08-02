angular.module('mainApp')

.controller('detailController', function ($rootScope, $scope, $routeParams, dataService) {
  var detId = $routeParams.detId
  $scope.section = 'Antojo de '
  var verify = $rootScope.catId
  console.log(verify)
  if (!isNaN(verify)) {
    console.log('hi')
    $('#btn-map').removeClass('displayHide')
  } else {
    $('#btn-search').removeClass('displayHide')
  }

  dataService.getVenueDetails(detId)
    .then(function (detId) {
      if (detId.data.response.venue.bestPhoto) {
        var imgPre = detId.data.response.venue.bestPhoto.prefix
        var imgSuf = 'original' + detId.data.response.venue.bestPhoto.suffix
        var imgUrl = imgPre + imgSuf
        $scope.imgUrl = imgUrl
      } else {
        var imgUrl = 'http://www.hdfondos.eu/pictures/2015/0409/1/restaurant-wallpaper-332136.jpg'
        $scope.imgUrl = imgUrl
      }

      console.log(detId.data)

      $scope.venueDetail = detId.data.response.venue

      // ng-repeat services in accordion
      $scope.attGroups = detId.data.response.venue.attributes.groups

      // ng-repeat tips in accordion
      $scope.itemsTips = detId.data.response.venue.tips.groups[0].items.slice(0, 5)

      // ng-repeat images in gallery accordion
      $scope.imgGalPre = detId.data.response.venue.photos.groups[0].items

      // console.log(detId.data)
      // console.log(detId.data.response.venue.tips.groups[0].items)
      // console.log(detId.data.response.venue.photos.groups[0].items[0])
      // console.log(detId.data.response.venue.photos.groups[0].items[0].prefix)
      // console.log(detId.data.response.venue.photos.groups[0].items[0].suffix)
    })
})
