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
        title: 'Comer',
        style: 'pe-is-f-flatware-1',
        subCategory: [

      {id: 0, type: 'Carne', style: 'pe-is-f-steak-2' },
      {id: 1, type: 'Pescado', style: 'pe-is-f-fish-2' },
      {id: 2, type: 'BBQ', style: 'pe-is-f-barbecue-2' },
      {id: 3, type: 'Tapas', style: 'pe-is-f-meat-tenderizer' },
      {id: 4, type: 'Take Away', style: 'pe-is-f-cloche-hand' },
      {id: 5, type: 'Brunch', style: 'pe-is-f-piece-of-cake-2' }

        ]
      },
      {
        id: 1,
        title: 'Beber',
        style: 'pe-is-f-bottle',
        subCategory: [
      {id: 0, type: 'Cafe y té', style: 'pe-is-f-cup-coffee-hot-2' },
      {id: 1, type: 'Smoothie', style: 'pe-is-f-thermal-cup-3' },
      {id: 2, type: 'Batidos', style: 'pe-is-f-steak-2' },
      {id: 3, type: 'Vermut', style: 'pe-is-f-champagne-glass-2-f' },
      {id: 4, type: 'Cocteles', style: 'pe-is-f-cocktail-glass-3' },
      {id: 5, type: 'Copas', style: 'pe-is-f-whisky-glass-1' }
        ]
      }      
    ]

    return localData
  })
