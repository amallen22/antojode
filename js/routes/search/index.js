angular.module('mainApp')
.config(function($routeProvider){
	$routeProvider
	.when('/apiTry', {
		templateUrl: 'js/routes/apiTry/template.html',
		controller: 'ApiTrycontroller'
	})
})

