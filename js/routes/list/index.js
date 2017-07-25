angular.module('mainApp')
.config(function($routeProvider){
	$routeProvider
	.when('/categories/:id/subcategory/:id', {
		templateUrl: 'js/routes/list/template.html',
		controller: 'listController'
	})
})

