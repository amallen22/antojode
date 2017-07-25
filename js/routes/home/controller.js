angular.module('mainApp')

.controller('homeController', function ($scope, localData) {
  $scope.section = 'Vissont'

  // added marc
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      $scope.$apply(function () {
        $scope.position = position
        console.log(position)
      })
    })
  }
  // end added marc
})
