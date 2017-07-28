angular.module('mainApp')
.controller('mapController', function ($rootScope, $scope, $routeParams, dataService, localData) {
  var catId = $routeParams.catId
  var subId = $routeParams.subId
  $rootScope.catId = catId
  $rootScope.subId = subId
 
  var querySubCategory = localData[catId].subCategory[subId].type
  var query = querySubCategory
  $scope.section = query

  navigator.geolocation.getCurrentPosition(function (position) {        //obtener geolocalizacion usuario
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    var ll = latitude + ', ' + longitude
    $scope.ll = ll

    dataService.getConfig(query, ll)        // servicio obtencion api con query y posicion
    .then(function (config) {
      $scope.items = config.data.response.groups[0].items
    })
  })
})