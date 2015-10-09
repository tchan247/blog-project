// 
angular.module('blog-service', [])

.factory('PostsService', function($http, $document, $rootScope){

  getHeaders = function() {
    return $http.get('config.json');
  };

  getPosts = function(page) {
    var postRequest = function(headers) {
      return $http({
        method: 'GET', 
        url: 'https://api.parse.com/1/classes/blog_post', 
        headers: headers
      }).then(function(data){
        return data.data.results.sort(function(a, b){
          return b.post_id - a.post_id;
        });
      });
    };

    if($rootScope.headers) {
      return postRequest($rootScope.headers);
    } else {
      return getHeaders()
      .then(function(data){
        return postRequest(data.data);
      });
    }

  };

  getImages = function(posts) {
    var insertImages = function(data) {
      var domPosts = $document[0].getElementsByClassName('post');
      var len = domPosts.length;
      var imageSet = data;
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
    };

    var imageRequest = function(headers) {
      return $http({
        method: 'GET', 
        url: 'https://api.parse.com/1/classes/blog_images', 
        headers: headers
      }).then(function(data){
        insertImages(data.data.results);
      }); 
    };

    if($rootScope.headers) {
      imageRequest($rootScope.headers);
    } else {
      return getHeaders()
      .then(function(data){
        imageRequest(data.data);
      });
      
    }
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

