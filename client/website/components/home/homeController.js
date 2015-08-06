angular.module('home-controller', [])

.controller('homeController', function($scope, aboutData){
  $scope.name;
  $scope.aboutMe = aboutData.data.results[0].aboutMe;
  // console.log($scope.aboutMe);
});