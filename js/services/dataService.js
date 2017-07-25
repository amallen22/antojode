angular.module('mainApp')

  // promise foursquare
  .factory('dataService', function ($http) {
    var clientId = 'NOMTFMQBL1FV34UIYMEC0AOM0F11X2D0NXQOXTB15X4XHXRT'
    var clientSecret = 'I21LTBGGQSNUZXIR3AUSSZTVN0ASR15C43JDA4TGFMGHB3VC'
    var userPosition = '41.4814535, 2.3276007' //latitude longitude

    function getConfig () {
      var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20130815&ll='+userPosition+'&radius=5000&query=almuerzo, mar'
      return $http.get(url)
    }
    return {
      getConfig: getConfig
    }
  })


  // promise local
  .factory('localData', function () {
    var localData = [
      {
        id: 0,
        title: 'Desayuno',
        subCategory: [{
          
          id: 01,
          type: 'Dulce'
        },
        {
          id: 02,
          type: 'Salado'
        }]
      },
      {
        id: 1,
        title: 'Almuerzo',
        subCategory: [
          { id: 11, type: 'Take Away'},
          { id: 12, type: 'Mar'},
          { id: 13, type: 'Montaña'},
          { id: 14, type: 'Vegetariano'},
          { id: 15, type: 'Exótico'}
        ]
      },
      {
        id: 2,
        title: 'Cena',
        subCategory: [
          { id: 21, type: 'Take Away'},
          { id: 22, type: 'Mar'},
          { id: 23, type: 'Montaña'},
          { id: 24, type: 'Vegetariano'},
          { id: 25, type: 'Exótico'}
        ]
      },
      {
        id: 3,
        title: 'Café y té'
      },
      {
        id: 4,
        title: 'Tapas'
      },
      {
        id: 5,
        title: 'Copas'
      }
    ]

    return localData
  })
