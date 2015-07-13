angular.module('admin.edit', [])

.factory('editService', function($http){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

  postPost = function(data) {
    var json = {textBody: processPost(data)};
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/blog_post', 
      headers: {'X-Parse-Application-Id':'fCTyXGLEO67M6Ouf4bw4wgnsYxoE7vOvtgxkgzSj', 'X-Parse-REST-API-Key':'lj4Pqa5VjeugGRx4S2jM1YteZR1PUjt8iRm65LHU'},
      data: JSON.stringify(json)
    });
  };

  processPost = function(str) {
    var newStr = '';
    var lineBreak = true;

    for(var i = 0, len = str.length; i < len; i++) {
      var char = str[i];

      if(str.slice(i, i+6) === '<code>') {
        newStr = newStr.concat('<pre>');
      }

      if(str.slice(i, i+7) === '</code>') {
        newStr = newStr.concat('</pre>');
      }

      if(char === '\n') {
        console.log('break');
        newStr = newStr.concat('<br>');
        lineBreak = true;
      } else {
        if(char === ' ' && lineBreak) {
          console.log('space');
          newStr = newStr.concat('&nbsp;');
        } else {
          lineBreak = false;
          newStr = newStr.concat(char);
        }
      }
    }
  
    return newStr;
  };

  return {
    postPost: postPost
  };
});

