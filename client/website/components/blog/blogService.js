
angular.module('blog-service', [])

.factory('PostsService', function($http){

  getHeaders = function() {
    $http.get('config.json');
  };

  getPosts = function(headers) {
    return $http({
      method: 'GET', 
      url: 'https://api.parse.com/1/classes/blog_post', 
      headers: headers
    });
  };

  getImages = function(headers) {
    return $http({
      method: 'GET', 
      url: 'https://api.parse.com/1/classes/blog_images', 
      headers: headers
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

