angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/home/:id', {
	  templateUrl: 'js/routes/categories/template.html',
	  controller: 'categoriesController'
})
})
