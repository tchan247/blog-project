
angular.module('blog-controller', [ 'ngSanitize'])
  
.controller('blogController', function($scope, $sanitize, postsData, PostsService){
  $scope.posts = postsData.data.results;

  // console.log($scope.posts[0].textBody);
  
  // console.log($sanitize($scope.posts[0].textBody));
})

.filter('parseStringToHTML', function() {
  return function(str) {
  };
});
