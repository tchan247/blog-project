
angular.module('app', ['ngRoute', 'ngResource', 'blog-service', 'blog-controller', 'admin'])

  .config(function($routeProvider){
    $routeProvider
    .when('/blog', {
      templateUrl: 'app/components/blog/blogView.html',
      controller: 'blogController',
      resolve: {
        postsData: function(PostsService){
          return PostsService.getPosts();
        }
      }
    })

    .when('/user', {

    })

    .when('/search', {
      // templateUrl: 'app/components/blog/blogView.html',
      // controller: 'blogController',
    })

    .when('/projects', {

    })

    .when('./', {
      templateUrl: './index.html'
    })


    // .otherwise({
    //   redirectTo: '/'
    // });

  });
