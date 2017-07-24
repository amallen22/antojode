angular.module('mainApp')

  .factory('dataService', function ($http) {
<<<<<<< HEAD
  var clientId = 'NOMTFMQBL1FV34UIYMEC0AOM0F11X2D0NXQOXTB15X4XHXRT'
  var clientSecret = 'I21LTBGGQSNUZXIR3AUSSZTVN0ASR15C43JDA4TGFMGHB3VC'
  function getConfig () {

    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20130815&near=barcelona&query=dulce'

    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20130815&near=barcelona&query=desayuno, salado'
    return $http.get(url)
  }
  return {
    getConfig: getConfig
  }
})
=======
    var clientId = 'NOMTFMQBL1FV34UIYMEC0AOM0F11X2D0NXQOXTB15X4XHXRT'
    var clientSecret = 'I21LTBGGQSNUZXIR3AUSSZTVN0ASR15C43JDA4TGFMGHB3VC'
    function getConfig () {
      var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20130815&near=barcelona&query=desayuno, salado'
      return $http.get(url)
    }
    return {
      getConfig: getConfig
    }
  })
>>>>>>> 15f19ad406d971408b86266c9156557d5830e322
