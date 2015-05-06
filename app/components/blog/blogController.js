(function(){

  var post = {
    subject: 'Cool Subject',
    date: 'today',
    text: 'bla bla',
    tags: ['tag1', 'tag2', 'tag3'],
    comment: 'comment'
  };

  // blog controller
  var blog = angular.module('blog-controller', []);

  blog.controller('blogController', function(){
    this.posts = post;
  });

})();