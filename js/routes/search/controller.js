angular.module('mainApp')
.controller('ApiTrycontroller', function($scope, dataService){
	$scope.section = "API TRY"

	dataService.getConfig()
	.then(function(config){
		console.log(config)
	})	

})