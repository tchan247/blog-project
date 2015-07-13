angular.module('admin.edit', [])

.controller('editController', function($scope, editService) {
  $scope.upload = function() {
    var data = $("#textInput").val();
    editService.postPost(data);
  };

  $scope

  console.log('edit controller');
});