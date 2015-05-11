
(function() {

  var app = angular.module('app', ['home', 'blog', 'ngRoute', 'ngResource']);

  app.config(function($routeProvider){
    $routeProvider.when('/blog', {
      templateUrl: 'app/components/blog/blogView.html',
      controller: 'blogController'
      // controllerAs: 'blogController'
    })

    .when('./', {
      templateUrl: './index.html'
    })

    .otherwise({
      redirectTo: '/'
    });

  });

  var home = angular.module('home', []);

  var blog = angular.module('blog', ['blog-controller']);

})();