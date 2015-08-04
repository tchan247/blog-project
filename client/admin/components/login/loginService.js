angular.module('admin.login')

.factory('loginService', function($http){
  var authToken = true;

  getAuthToken = function() {
    return authToken;
  };

  handleLogin = function() {

  };
  
  login = function(){
    
  };

  return {
    login: login,
    getAuthToken: getAuthToken
  };

});