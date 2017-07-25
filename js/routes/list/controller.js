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
    })
