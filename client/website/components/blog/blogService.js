
angular.module('blog-service', [])

.factory('PostsService', function($http){

  getPosts = function() {
    return $http({
      method: 'GET', 
      url: 'https://api.parse.com/1/classes/blog_post', 
      headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'}
    });
  };

  getImages = function() {
    return $http({
      method: 'GET', 
      url: 'https://api.parse.com/1/classes/blog_images', 
      headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'}
    });
  };

  postComment = function(data) {
    console.log('post comment');
  };

  return {
    getPosts: getPosts,
    postComment: postComment,
    getImages: getImages
  };

});

