angular.module('mainApp')

.controller('listController', function ($scope, $routeParams, dataService, localData) {
  var catId = $routeParams.catId
  var subId = $routeParams.subId
  var queryCategory = localData[catId].title
  var querySubCategory = localData[catId].subCategory[subId].type

      // esta query tiene que llegar al dataService para recojer parametro
  var query = queryCategory + ' ' + querySubCategory

  $scope.section = query

  dataService.getConfig(query)
      .then(function (config) {
      	console.log(config)

		  // console.log(config.data.response.groups['0'].items)
		  $scope.items = config.data.response.groups[0].items

		  // $scope.lat = config.data.response.groups[0].items.veniu.location.lat
		  console.log(config.data.response.groups['0'].items[3].venue.location.lat)
		  console.log(config.data.response.groups['0'].items[3].venue.location.lng)
      })

      // controller para mapa
      // .controller(‘MapCtrl’, function($scope, $element, locationsModel) {
      // 	const mapEl = $element.find(‘gmap’)[0]
      // 	const mapOptions = {
      // 		zoom: 10,
      // 		center: {lat: 41.398362999999996, lng: 2.1999963}
      // 	};
      // 	const gmap = new google.maps.Map(mapEl, mapOptions);
      // 	$scope.gmap = gmap;
      // 	$scope.locations = locationsModel;
      // })
})
