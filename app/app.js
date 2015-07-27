
angular.module('app', ['ngRoute', 'ngResource', 'home-service', 'home-controller', 'blog-service', 
  'blog-controller', 'projects-service', 'projects-controller'])

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
