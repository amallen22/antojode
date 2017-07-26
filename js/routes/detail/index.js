angular.module('mainApp')

.config(function ($routeProvider) {
  $routeProvider
	.when('/categories/:catId/subcategory/:subId', {
  templateUrl: 'js/routes/list/template.html',
  controller: 'listController'
})
})
