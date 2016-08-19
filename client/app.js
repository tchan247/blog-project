
angular.module('app', ['ngRoute', 'ngResource', 'home-service', 'home-controller', 'blog-service', 
  'blog-controller', 'projects-service', 'projects-controller', 'admin'])

  // // temporary solution to initialize Parse headers
  // .run(function($http, $rootScope){
  //   $http.get('../config.json')
  //   .then(function(data){
  //     $rootScope.headers =  data.data;
  //   });
  // })

  .config(function($routeProvider){
    $routeProvider
    // admin routes
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

    // app routes
    .when('/blog', {
      templateUrl: './client/website/components/blog/blogView.html',
      controller: 'blogController',
      resolve: {
        postsData: function(PostsService){
          return PostsService.getPosts();
        }
      }
    })
    // .when('/user', {
    //   templateUrl: '',
    //   controller: '',
    // })
    // .when('/search', {
    //   templateUrl: '',
    //   controller: '',
    // })
    .when('/projects', {
      templateUrl: './client/website/components/projects/projectsView.html',
      controller: 'projectsController',
    })
    .when('/', {
      templateUrl: './client/website/components/home/homeView.html',//'./index.html'
      controller: 'homeController',
      resolve: {
        aboutData: function(homeService){
          return homeService.getAboutMe();
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });

  });
