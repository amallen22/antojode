angular.module('mainApp')
.controller('categoriesController', function ($scope, dataService) {
  $scope.section = 'Categories'

  dataService.getConfig()
	.then(function (config) {
  console.log(config)
})
})
