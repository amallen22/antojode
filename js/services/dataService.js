angular.module('mainApp')

  .factory('dataService', function ($http) {
  var clientId = 'NOMTFMQBL1FV34UIYMEC0AOM0F11X2D0NXQOXTB15X4XHXRT'
  var clientSecret = 'I21LTBGGQSNUZXIR3AUSSZTVN0ASR15C43JDA4TGFMGHB3VC'
  function getConfig () {
    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20130815&near=barcelona&query=barcos'
    return $http.get(url)
  }
  return {
    getConfig: getConfig
  }
})
