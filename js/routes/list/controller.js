angular.module('mainApp')
.controller('listController', function($scope, dataService){
	$scope.section = "LIST"

	dataService.getConfig()
	.then(function(config){
		console.log(config)
	})	

})