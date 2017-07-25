angular.module('mainApp')
.controller('categoriesController', function ($scope, $routeParams, localData) {
  var categoryId = $routeParams.id

  $scope.localData = localData[categoryId]
  $scope.subCategory = localData[categoryId].subCategory

  console.log(localData[categoryId])
})
