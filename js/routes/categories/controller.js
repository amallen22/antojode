angular.module('mainApp')
.controller('categoriesController', function ($scope, $routeParams, localData, dataService) {
  var categoryId = $routeParams.id

  $scope.categoryId = $routeParams.id

  $scope.localData = localData[categoryId]
  $scope.subCategory = localData[categoryId].subCategory

  // Enviar la categoria a dataService
  $scope.queryCategory = localData[categoryId].title
})
