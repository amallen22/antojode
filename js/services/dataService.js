angular.module('mainApp')
  .factory('dataService', function ($http) {
  var clientId = '3e8bb211bfde5d15ec1dfa259f575ce9'
  var clientSecret = 'I21LTBGGQSNUZXIR3AUSSZTVN0ASR15C43JDA4TGFMGHB3VC'
  function getConfig () {
    var url = 'https://api.foursquare.com/v2/venues/search?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20130815&ll=40.7,-74&query=barcos, putas'
    return $http.get(url)
  }
  return {
    getConfig: getConfig
  }
})

// 'https://api.foursquare.com/v2/venues/search?v=20170501&radius=4500&near=' + location + '&query=' + query + '&categoryId=4d4b7105d754a06374d81259&client_id=IXSMMTKC1C0EOWTOMSINDGHJLA12LXXLVIBH3J4DSKL5I3VW&client_secret=WK55K10UKPAJVGZKFI1XNCORVSKRYRLLWKFQ4TDO2U01AR2V'
// https://api.foursquare.com/v2/venues/search?client_id='+clientId+'&client_secret='+clientSecret+'&v=20130815&ll=40.7,-74&query=sushi
