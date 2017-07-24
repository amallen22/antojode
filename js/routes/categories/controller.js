angular.module('mainApp')
.controller('categoriesController', function ($scope, $routeParams, dataService) {
  $scope.section = 'Categories'

  var categoryId = $routeParams.id

  // dataService.getCategoryId(categoryId)
  // .then(function (config) {
  // 	console.log(config)
  // })
})
