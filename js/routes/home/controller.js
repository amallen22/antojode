angular.module('mainApp')

.controller('homeController', function ($scope, localData) {
  $scope.section = 'Vissont'

  $scope.localData = localData

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

// podemos añadir 'location' como parametro en la funcion  para añadir rutas
