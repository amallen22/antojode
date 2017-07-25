angular.module('mainApp')
    .controller('listController', function ($scope, $routeParams, localData, dataService) {
      $scope.section = 'LIST'

      var categoryId = $routeParams.id
      $scope.querySubCategory = localData[categoryId].title.subCategory[subid].type

      console.log(query)
    })
