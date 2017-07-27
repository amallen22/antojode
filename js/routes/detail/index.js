angular.module('mainApp')

.config(function ($routeProvider) {
  $routeProvider
	.when('/detail/:detId', {
  templateUrl: 'js/routes/detail/template.html',
  controller: 'detailController'
})
})
