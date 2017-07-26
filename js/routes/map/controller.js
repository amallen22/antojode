angular.module('mainApp')
.controller('mapController', function ($scope, $routeParams, dataService, localData) {
  var catId = $routeParams.catId
  var subId = $routeParams.subId
  var queryCategory = localData[catId].title
  var querySubCategory = localData[catId].subCategory[subId].type
  // esta query tiene que llegar al dataService para recojer parametro
  var query = queryCategory + ' ' + querySubCategory

  $scope.section = query

  // get user geolocalitation
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    var ll = latitude + ', ' + longitude
    $scope.ll

    // console.log(position)
    dataService.getConfig(query, ll)
    .then(function (config) {
      $scope.items = config.data.response.groups[0].items

    // make markers clickable

      $scope.showDetail = function (e, items) {
        $scope.items = items
        $scope.map.showInfoWindow('infow', items)
      }
    })
  })

//     angular.module('ngMap').controller('MyCtrl', function(NgMap) {

//       NgMap.getMap().then(function(map) {
//         console.log('map', map)
//         $scope.map = map
//       })
// //
//       $scope.clicked = function() {
//         alert('Clicked a link inside infoWindow');
//       };

//       $scope.shops = [
//         {id:'foo', name: 'FOO SHOP', position:[41,-87]},
//         {id:'bar', name: 'BAR SHOP', position:[42,-86]}
//       ];
//       $scope.shop = $scope.shops[0];
// //
//       $scope.showDetail = function(e, shop) {
//         $scope.shop = shop;
//         $scope.map.showInfoWindow('foo-iw', shop.id);
//       };
// //
//       $scope.hideDetail = function() {
//         $scope.map.hideInfoWindow('foo-iw');
//       };
//     });
})
