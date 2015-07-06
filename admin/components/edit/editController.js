angular.module('admin.edit', [])

.controller('editController', function($scope) {
  $scope.upload = function() {
    var data = $(".test").val();
    PostsService.postPost(data);
  };
});