angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/categories/:id', {
	  templateUrl: 'js/routes/categories/template.html',
	  controller: 'categoriesController'
})
})
