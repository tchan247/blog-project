// (function(){
//   var blogData;

  // var blogService = angular.module('blog-service', [])
//   // .factory('blogServiceService', function(){
//   //   var serviceData = {'0': 'asdf'};
//   //   return serviceData;
//   // });

//   blogService.controller('blogService', ['$http', function($scope, $http){

//     $scope.itmes = [];

//     $scope.getItems = function() {
//       $http.get({method: 'GET', 
//         url: 'https://api.parse.com/1/classes/blog_post', 
//         headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'},
//         data: JSON.stringify({key : 'value'})
//         })
//           .success(function(data, status){
//             $scope.items = data;
//             // console.log(data);
//             // console.log(status);
//           })
//           .error(function(data, status){
//             console.log(status);
//           });
//     };

//     $scope.getItems();

//     console.log($scope.items);
//   }]);

// })();