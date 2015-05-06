
(function() {

  var app = angular.module('app', ['home', 'blog']);

  var home = angular.module('home', []);

  var blog = angular.module('blog', ['blog-controller']);

})();