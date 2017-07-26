angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/categories/:catId/map/:subId', {
  templateUrl: 'js/routes/map/template.html',
  controller: 'mapController'
})
})
