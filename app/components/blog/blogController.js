
angular.module('blog-controller', [ 'ngSanitize'])
  
.controller('blogController', function($scope, $sanitize, postsData, PostsService){
  $scope.posts = postsData.data.results;

  $scope.addComment = function() {
    PostsService.postComment();
  };

});
