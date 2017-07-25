angular.module('mainApp')

    .controller('listController', function ($scope, $routeParams, dataService, localData) {
      $scope.section = 'LIST'

      var catId = $routeParams.catId
      var subId = $routeParams.subId

      var queryCategory = localData[catId].title
      var querySubCategory = localData[catId].subCategory[subId].type

         // esta query tiene que llegar al dataService para recojer parametro
      var query = queryCategory + ' ' + querySubCategory

      dataService.getConfig()
		.then(function (config) {
  console.log(config)
})
      console.log(query)
    })
