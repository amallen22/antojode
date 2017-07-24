angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/:id', {
	  templateUrl: 'js/routes/categories/template.html',
	  controller: 'categoriesController'
})
})
