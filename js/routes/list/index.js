angular.module('mainApp')
.config(function($routeProvider){
	$routeProvider
	.when('/home/:id/:sub-id', {
		templateUrl: 'js/routes/list/template.html',
		controller: 'listController'
	})
})

