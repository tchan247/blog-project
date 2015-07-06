angular.module('admin', ['ngRoute', 'ngResource', 'admin.edit'])

.config(function($routeProvider){
  $routeProvider
  .when('/', {

  })
  .when('/edit', {

  })
  .otherwise({
    redirectTo: '/'
  });
});