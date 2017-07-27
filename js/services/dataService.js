angular.module('mainApp')

  // promise foursquare
  .factory('dataService', function ($http) {
    var clientId = 'NOMTFMQBL1FV34UIYMEC0AOM0F11X2D0NXQOXTB15X4XHXRT'
    var clientSecret = 'I21LTBGGQSNUZXIR3AUSSZTVN0ASR15C43JDA4TGFMGHB3VC'
    var userPosition = '41.398362999999996, 2.1999963' // latitude longitude

    function getConfig (query, ll) {
      var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20130815&ll=' + ll + '&radius=3000&section=&limit=10&query=' + query
      return $http.get(url)
    }

    function getVenueDetails (detId) {
      var url = 'https://api.foursquare.com/v2/venues/' + detId + '?v=20170501&client_id=' + clientId + '&client_secret=' + clientSecret
      return $http.get(url)
    }

    return {
      getConfig: getConfig,
      getVenueDetails: getVenueDetails
    }
  })

  // promise local
  .factory('localData', function () {
    var localData = [
      {
        id: 0,
        title: 'Desayuno',
        style: 'pe-is-f-bread-1',
        subCategory: [
      {id: 0, type: 'Dulce', style: 'pe-is-f-donut-1' },
      {id: 1, type: 'Salado', style: 'pe-is-f-sandwich' }
        ]
      },
      {
        id: 1,
        title: 'Comida',
        style: 'pe-is-f-flatware-1',
        subCategory: [
      {id: 0, type: 'Take Away', style: 'pe-is-f-milk-2' },
      {id: 1, type: 'Pescado', style: 'pe-is-f-fish-1' },
      {id: 2, type: 'Carne', style: 'pe-is-f-steak-2' },
      {id: 3, type: 'Vegetariano', style: 'pe-is-f-pepper' },
      {id: 4, type: 'Etnico', style: 'pe-is-f-sushi-2' }
        ]
      },
      {
        id: 2,
        title: 'Cena',
        style: 'pe-is-f-cloche-hand',
        subCategory: [
      {id: 0, type: 'Take Away', style: 'pe-is-f-milk-2'},
      {id: 1, type: 'Pescado', style: 'pe-is-f-fish-1'},
      {id: 2, type: 'Carne', style: 'pe-is-f-steak-2'},
      {id: 3, type: 'Vegetariano', style: 'pe-is-f-pepper'},
      {id: 4, type: 'Etnico', style: 'pe-is-f-sushi-2'}
        ]
      },
      {
        id: 3,
        title: 'Café y té',
        style: 'pe-is-f-cup-coffee-hot-1'
      },
      {
        id: 4,
        title: 'Tapas',
        style: 'pe-is-f-skewer'
      },
      {
        id: 5,
        title: 'Copas',
        style: 'pe-is-f-whisky-glass-1'
      }

    ]

    return localData
  })
