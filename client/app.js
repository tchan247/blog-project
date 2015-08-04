
angular.module('app', ['ngRoute', 'ngResource', 'home-service', 'home-controller', 'blog-service', 
  'blog-controller', 'projects-service', 'projects-controller', 'admin'])

  .config(function($routeProvider){
    $routeProvider
    .when('/login', {
      templateUrl: './client/admin/components/login/loginView.html',
      controller: 'loginController'
    })
    .when('/edit', {
      templateUrl: './client/admin/components/edit/editView.html',
      controller: 'editController',
      resolve: {
        auth: function($location, loginService) {
          var bool = loginService.getAuthToken();
          if(bool) {
            console.log('authed!');
          } else {
            $location.path('/');
          }
        }
      }
    })
    .when('/blog', {
      templateUrl: './client/website/components/blog/blogView.html',
      controller: 'blogController',
      resolve: {
        postsData: function(PostsService){
          return PostsService.getPosts();
        }
      }
    })
    .when('/user', {
      templateUrl: '',
      controller: '',
    })
    .when('/search', {
      templateUrl: '',
      controller: '',
    })
    .when('/projects', {
      templateUrl: '',
      controller: '',
    })
    .when('./', {
      templateUrl: './index.html'
    })
    .otherwise({
      redirectTo: '/'
    });

  });
