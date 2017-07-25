angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/categories/:catId', {
	  templateUrl: 'js/routes/categories/template.html',
	  controller: 'categoriesController'
})
})
