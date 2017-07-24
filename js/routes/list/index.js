angular.module('mainApp')
.config(function($routeProvider){
	$routeProvider
	.when('/list', {
		templateUrl: 'js/routes/list/template.html',
		controller: 'listController'
	})
})

