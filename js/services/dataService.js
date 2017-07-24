angular.module('mainApp')

  .factory('dataService', function ($http) {
<<<<<<< HEAD
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
=======
    var clientId = 'NOMTFMQBL1FV34UIYMEC0AOM0F11X2D0NXQOXTB15X4XHXRT'
    var clientSecret = 'I21LTBGGQSNUZXIR3AUSSZTVN0ASR15C43JDA4TGFMGHB3VC'
    function getConfig () {
      var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20130815&near=barcelona&query=la trini'
      return $http.get(url)
    }
    return {
      getConfig: getConfig
    }
  })
>>>>>>> 489593e52b4ee984b2ae7f0214ff1f52f5683918
