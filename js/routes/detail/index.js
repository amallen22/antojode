angular.module('mainApp')

.config(function ($routeProvider) {
  $routeProvider
	.when('/categories/:catId/subcategory/:subId/detail/:venueId', {
  templateUrl: 'js/routes/detail/template.html',
  controller: 'detailController'
})
})
