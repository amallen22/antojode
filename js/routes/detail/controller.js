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
      $scope.attGroups = detId.data.response.venue.attributes.groups.slice(1, 5)
      $scope.itemsTips = detId.data.response.venue.tips.groups[0].items.slice(0, 5)

      $scope.imgGalPre = detId.data.response.venue.photos.groups[0].items

	// testing
    	// imgGal = img.user.firstName
      // var imgGalPre = img.prefix
      // var imgGalSuf = '' + img.suffix

      console.log(detId.data)
      console.log(detId.data.response.venue.tips.groups[0].items)
      // console.log(detId.data.response.venue.photos.groups[0].items[0])
      // console.log(detId.data.response.venue.photos.groups[0].items[0].prefix)
      // console.log(detId.data.response.venue.photos.groups[0].items[0].suffix)
    })
})
