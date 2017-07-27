angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/categories/:catId/map/:subId/detail/:detId', {
  templateUrl: 'js/routes/detail/template.html',
  controller: 'detailController'
})
})
