angular.module('mainApp')
.controller('homeController', function ($scope, localData) {
  $scope.section = 'Vissont'

  $scope.localData = localData
})
