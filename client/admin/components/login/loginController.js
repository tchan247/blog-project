angular.module('admin.login')

.controller('loginController', function($scope, loginService){
  console.log('login controller');
  $scope.test = function() {
    console.log(loginService.getAuthToken());
  };

});

