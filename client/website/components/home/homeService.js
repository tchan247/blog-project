angular.module('home-service', [])

.factory('homeService', function($http, $rootScope){

  getHeaders = function() {
    return $http.get('config.json');
  };

  var getName = function(){
    var nameRequest = function(headers) {
      return $http({
        method: 'GET', 
        url: '', 
        headers: headers
      });
    };

    if($rootScope.headers) {
      return nameRequest($rootScope.headers);
    } else {
      return getHeaders()
      .then(function(data){
        return nameRequest(data.data);
      });
    }

  };

  var getAboutMe = function(){
    var aboutRequest = function(headers) {
      return $http({
        method: 'GET', 
        url: 'https://api.parse.com/1/classes/about_me', 
        headers: headers
      });

    };

    if($rootScope.headers) {
      return aboutRequest($rootScope.headers);
    } else {
      return getHeaders()
      .then(function(data){
        return aboutRequest(data.data);
      });
    }
  };

  return {
    getName: getName,
    getAboutMe: getAboutMe
  };
});
