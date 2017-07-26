angular.module('mainApp')

  // promise foursquare
  .factory('dataService', function ($http) {
    var clientId = 'NOMTFMQBL1FV34UIYMEC0AOM0F11X2D0NXQOXTB15X4XHXRT'
    var clientSecret = 'I21LTBGGQSNUZXIR3AUSSZTVN0ASR15C43JDA4TGFMGHB3VC'
    var userPosition = '41.398362999999996, 2.1999963' // latitude longitude

    function getConfig (query, ll) {
      var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20130815&ll=' + ll + '&radius=3000&section=food&limit=10&query=' + query
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
        subCategory: [
      {id: 0, type: 'Dulce' },
      {id: 1, type: 'Salado' }
        ]
      },
      {
        id: 1,
        title: 'Almuerzo',
        subCategory: [
      {id: 0, type: 'Take Away'},
      {id: 1, type: 'Mar'},
      {id: 2, type: 'Montaña'},
      {id: 3, type: 'Vegetariano'},
      {id: 4, type: 'Exótico'}
        ]
      },
      {
        id: 2,
        title: 'Cena',
        subCategory: [
      {id: 0, type: 'Take Away'},
      {id: 1, type: 'Mar'},
      {id: 2, type: 'Montaña'},
      {id: 3, type: 'Vegetariano'},
      {id: 4, type: 'Exótico'}
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

  // STATIC LOCATION DATA
  // .factory(‘locationsModel’, function() {
  //   const locationsModel = [{
  //     name: ‘Wilshire Country Club’,
  //     color: ‘darkblue’,
  //     lat: 34.077796,
  //     lng: -118.331151
  //   },{
  //     name: ‘301 N Rossmore Ave’,
  //     color: ‘fuchsia’,
  //     lat: 34.077146,
  //     lng: -118.327805
  //   },{
  //     name: ‘5920 Beverly Blvd’,
  //     color: ‘red’,
  //     lat: 34.070281,
  //     lng: -118.331831
  //   }];
  //   return locationsModel;
  // })
