angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/categories', {
  templateUrl: 'js/routes/categories/template.html',
  controller: 'categoriesController'
})
})
