angular.module('mainApp')
.controller('listController', function($scope, dataService){
	$scope.section = "LIST"

	dataService.getSubId(subId)
	.then(function(config){
		console.log(config)
	})	

})


//// (function () {
//   $(document).on('albumSelection', function (e, idAlbum) {
//     SpotifyService.getTracks(idAlbum)
//       .then(function (oData) {
//         var liTemplate = '<li><a target="_blank" href="<%URL%>"><%NAME%></a></li>'
//         var aLisTracks = oData.items.map(function (oTrack) {
//           return liTemplate
//             .replace('<%URL%>', oTrack.preview_url)
//             .replace('<%NAME%>', oTrack.name)
//         })

//         $('#tracks-list ul').html(aLisTracks.join(''))
//         $('#tracks-list').removeClass('hidden')
//       })
//   })
// })()
