
angular.module('blog-service', [])

.factory('PostsService', function($http){

  getHeaders = function() {
    return $http.get('config.json');
    // return;
  };

  getPosts = function() {
    return this.getHeaders()
     .then(function(data){
        return $http({
          method: 'GET', 
          url: 'https://api.parse.com/1/classes/blog_post', 
          headers: data.data
        });
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
    getImages: getImages,
    getHeaders: getHeaders
  };

});

