angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/search', {
  templateUrl: 'js/routes/search/template.html',
  controller: 'searchController'
})
})
