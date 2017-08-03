angular.module('mainApp')
.controller('index', function ($rootScope, $location, $scope) {
	$scope.resetParams = function(){
		delete $rootScope.catId
		$location.path('/')
	}
})