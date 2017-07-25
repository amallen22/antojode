angular.module('mainApp')
.controller('listController', function($scope, $routeParams, dataService, localData) {
  $scope.section = "LIST"

  var catId = $routeParams.catId
  var subId = $routeParams.subId

  var queryCategory = localData[catId].title
  var querySubCategory = localData[catId].subCategory[subId].type

  // esta query tiene que llegar al dataService para recojer parametro
  var query = queryCategory + " " + querySubCategory


  dataService.getConfig(query)
  .then(function (config) {
   console.log(config)
 })

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     $scope.$apply(function () {
  //       $scope.position = position
  //       console.log(position)
  //     })
  //   })
  // }


})
