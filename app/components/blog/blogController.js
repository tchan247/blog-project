
angular.module('blog-controller', [ 'ngSanitize'])
  
.controller('blogController', function($scope, $sanitize, postsData, PostsService){
  $scope.posts = postsData.data.results.reverse();

  $scope.addComment = function() {
    PostsService.postComment();
  };

  PostsService.getImages()
    .then(function(data){
      console.log(data);
    });

});
