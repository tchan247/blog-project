
angular.module('blog-controller', ['ngSanitize'])
  
.controller('blogController', function($scope, $sanitize, postsData, PostsService){

  $scope.posts = postsData;

  // load images
  PostsService.getImages(postsData, $scope);

  // $scope.addComment = function() {
  //   PostsService.postComment();
  // };

});
