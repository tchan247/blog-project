angular.module('admin.edit', [])

.controller('editController', function($scope, editService) {
  $scope.upload = function() {
    var data = $("#textInput").val();
    editService.processPost(data);
  };

  console.log('edit controller');
});