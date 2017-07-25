angular.module('mainApp')
    .controller('listController', function ($scope) {
      $scope.section = 'LIST'

        // dataService.getSubId(subId)
        // .then(function(config){
        // 	console.log(config)
        // })
    })

// (function() {

//   window.getRepos = getRepos

//   function getRepos( username ) {
//     var url = 'http://api.github.com/users/' + username +'/repos'
//     return $.ajax({ url: url }) // return a promise
//   }

// })()

// function() {

//   $(document).on("usernameReady", function(e, username) {

//     getRepos(username)
//       .then(function(aRepos) {

//         var lisRepos = aRepos.map(function(oRepo) {
//           return '<li>' + oRepo.name + '</li>'
//         })

//         $("#list-repos").html(lisRepos.join(''))

//       })

//   });

// })()
