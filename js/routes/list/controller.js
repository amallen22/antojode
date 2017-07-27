angular.module('mainApp')
.controller('listController', function ($scope, $routeParams, dataService, localData) {
  var catId = $routeParams.catId
  var subId = $routeParams.subId
  var venueId = $routeParams.venueId
  $scope.catId = catId
  $scope.subId = subId


  var querySubCategory = localData[catId].subCategory[subId].type
  // esta query tiene que llegar al dataService para recojer parametro
  var query = querySubCategory

  $scope.section = query

  // get user geolocalitation
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    var ll = latitude + ', ' + longitude

    // console.log(position)
    dataService.getConfig(query, ll)
    .then(function (config) {
      $scope.items = config.data.response.groups[0].items



      // $scope.lat = config.data.response.groups[0].items.veniu.location.lat
      // console.log(config.data.response.groups['0'].items[3].venue.location.lat)
      // console.log(config.data.response.groups['0'].items[3].venue.location.lng)
    })
  })
})
