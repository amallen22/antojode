angular.module('mainApp')
.config(function($routeProvider){
	$routeProvider
	.when('/categories/:catId/subcategory/:subId',{
		templateUrl: 'js/routes/map/template.html',
		controller: 'mapController'
	})
})

