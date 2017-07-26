angular.module('mainApp')

.controller('homeController', function ($scope, localData) {
  $scope.section = 'Vissont'
  $scope.localData = localData
  

})

// podemos añadir 'location' como parametro en la funcion  para añadir rutas
