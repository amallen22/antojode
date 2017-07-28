angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/search', {
  templateUrl: 'js/routes/apiTry/template.html',
  controller: 'ApiTrycontroller'
})
})
