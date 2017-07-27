angular.module('mainApp')
.controller('mapController', function ($scope, $routeParams, dataService, localData) {
  var catId = $routeParams.catId
  var subId = $routeParams.subId
  $scope.catId = $routeParams.catId
  $scope.subId = $routeParams.subId

  var querySubCategory = localData[catId].subCategory[subId].type
  // esta query tiene que llegar al dataService para recojer parametro
  var query = querySubCategory

  $scope.section = query


  // get user geolocalitation
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    var ll = latitude + ', ' + longitude
    $scope.ll = ll

    // console.log(position)
    dataService.getConfig(query, ll)
    .then(function (config) {
      $scope.items = config.data.response.groups[0].items
})
  })


})
