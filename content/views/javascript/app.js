
(function() {

  var app = angular.module('blog', []);

    var post = {
    subject: 'Cool Subject',
    date: 'today',
    text: 'bla bla',
    tags: ['tag1', 'tag2', 'tag3'],
    comment: 'comment'
  };

  app.controller('BlogController', function() {
    this.posts = post;
  });

})();