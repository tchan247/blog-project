angular.module('projects-service', [])

.factory('projectsService', function($http){
  var getProject = function(){
    return $http({
      method: 'GET', 
      url: '', 
      headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'}
    });
  };

  return {
    getProject: getProject
  };
});