(function(){

  var post = {
    subject: 'Getting Data',
    date: 'May 10, 2015',
    text: "  I planned to finish this blog with bare functionality today but I ran into some problems. \n " +
           "I've spent this weekend learning more about angular but have yet to successfully use the data I \n" +
           "requested from Parse via AJAX and HTTP attempts. The problem is the controller initializes before\n" +
           "I recieve the data and my blog post data do not get added to the document. This blog will have to \n" +
           "grow along with my growth as a student developer. For the next three months my life will revolve \n" +
           "around code and my free time spent on self learning and projects such as this website.\n \n"
           ,
    tags: ['first', 'post', 'blog'],
    comment: 'cool story'
  };

  // var posts;

  // $.ajax({
  //   url: 'https://api.parse.com/1/classes/blog_post',
  //   type: 'GET',
  //   dataType: 'JSON',
  //   headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'},
  //   data: JSON.stringify({key : 'value'}),
  //   contentType: 'application/json',
  //   error : function(data){
  //     console.log(error);
  //   },
  //   success: function(data){
  //     post = data.results;
  //     console.log(data.results);
  //   }

  // });

  // console.log(posts);

  var blogController = angular.module('blog-controller', [ /*'blog-service'*/]);

  // blogController.controller('blogController', function($scope, $http, $q){
  //   // this.posts = post;

  //   $scope.loadData = function(){
  //     var deferred = $q.defer();
  //     deferred.resolve($http.get({method: 'GET', 
  //       url: 'https://api.parse.com/1/classes/blog_post',
  //       headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'},
  //       data: JSON.stringify({key : 'value'})
  //     }));
  //     return deferred.promise;
  //   }

  //   $scope.loadData()

    // $scope.loadData().then(function(result){
    //   $scope.data = result.data;


    // }, function(reason){
    //   $scope.error = reason.data;
    // });

  // });

  // blogController.factory('myService', function blogFactory($http, $q, $resource){

    // return {
    //   get: function(){
    //     return $http({method: 'GET', 
    //     url: 'https://api.parse.com/1/classes/blog_post', 
    //     headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'},
    //     data: JSON.stringify({key : 'value'})
    //     });
    //   },
    //   addPost: function(obj){
    //     obj.posts = {'0': 1};
    //   }
    // };

    // return $resource();

  // });

  
  blogController.controller('blogController', function($scope){
      $scope.posts = post;



 // myService.get().then(function(response){
 //  console.log(response.data);
 //        $scope.posts = response.data;
 //      },function(response){});

    // myService.query(function(data){

    //   $scope.posts = data;
    // });


    // $scope.posts = [];
    
    // $scope.getItems = function(){
    //   $http({method: 'GET', 
    //     url: 'https://api.parse.com/1/classes/blog_post', 
    //     headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'}
    //   })
    //   .success(function(data, status){
    //     console.log(data.results);
    //       $scope.$apply(function(){
    //        $scope.posts = data.results;

    //       });
          
          
    //   })
    //   .error(function(data, status){
    //     console.log(status);
    //   });

    // };
    


    //   $.ajax({
    //   url: 'https://api.parse.com/1/classes/blog_post',
    //   type: 'GET',
    //   dataType: 'JSON',
    //   headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'},
    //   data: JSON.stringify({key : 'value'}),
    //   contentType: 'application/json',
    //   error : function(data){
    //     console.log(error);
    //   },
    //   success: function(data){
    //     $scope.posts = data.results;
    //     console.log(data.results);
    //   }

    // });

  });


})();