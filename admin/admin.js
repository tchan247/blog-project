angular.module('admin', ['ngRoute', 'ngResource', 'admin.edit', 'admin.login'])

.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'admin/components/login/loginView.html',
    controller: 'loginController'
  })
  .when('/edit', {
    templateUrl: 'admin/components/edit/editView.html',
    controller: 'editController'
  })
  .otherwise({
    redirectTo: '/'
  });
});