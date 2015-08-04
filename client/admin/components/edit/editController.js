angular.module('admin.edit')

.controller('editController', function($scope, editService, loginService) {
  $scope.upload = function() {
    console.log('uploading');
    var data = angular.element(document.querySelector("#textInput")).val();
    console.log(editService.processPost(data));
  };

  console.log('edit controller');
});
