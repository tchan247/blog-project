// 
angular.module('blog-service', [])

.factory('PostsService', function($http, $document){

  getHeaders = function() {
    return $http.get('config.json');
  };

  getPosts = function(page) {
    return this.getHeaders()
      .then(function(data){
        return $http({
          method: 'GET', 
          url: 'https://api.parse.com/1/classes/blog_post', 
          headers: data.data
        }).then(function(data){
          return data.data.results.sort(function(a, b){
            return b.post_id - a.post_id;
          });
        });
      });
  };

  getImages = function(posts) {
    return this.getHeaders()
      .then(function(data){
        return $http({
          method: 'GET', 
          url: 'https://api.parse.com/1/classes/blog_images', 
          headers: data.data
        }).then(function(data){
          var domPosts = $document[0].getElementsByClassName('post');
          var len = domPosts.length;
          var imageSet = data.data.results;
          var imgUrls = {};

          for(var j = 0; j < imageSet.length; j++) {
            imgUrls[imageSet[j].post_id] = imageSet[j];
          }

          for(var k = 0; k < len; k++) {
            var images = domPosts[k].childNodes[5].getElementsByTagName('img');
            var imgLen = images.length;
            var imgUrl = imgUrls[len-k-1];

            if(imgUrl && imgLen > 0) {
              for(var i = 0; i < imgLen; i++) {
                angular.element(images[i]).attr({
                  class: 'post-image',
                  src: imgUrl['image' + (i + 1)].url
                });
              }
            }
          }
        });
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

