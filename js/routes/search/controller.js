angular.module('mainApp')
.controller('searchController', function($scope, dataService){
	$scope.section = "Search"

	$scope.getSearch
	$scope.searchClick = function(detId){
		var query = detId
		$scope.query = query

		navigator.geolocation.getCurrentPosition(function (position) {        //obtener geolocalizacion usuario
			var latitude = position.coords.latitude
			var longitude = position.coords.longitude
			var ll = latitude + ', ' + longitude
			$scope.ll = ll

    		dataService.getConfig(query, ll)        // servicio obtencion api con query y posicion
    		.then(function (config) {
    		$scope.items = config.data.response.groups[0].items
    		})
		})
	}
	

})

