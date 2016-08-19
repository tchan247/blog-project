<?php include_once("home.html"); ?>

<!DOCTYPE html>
<html ng-app='app'>
<head>
  <meta http-equiv="pragma" content="nocache">
  <title>TerryChan-Man</title>

  <!-- <base href='./'> -->

  <link rel='stylesheet' href='client/css/stylesheet.css'>

</head>

<body>

  <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js'></script>
  <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.js'></script>
  <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-sanitize.js'></script>
  <script src='https://code.angularjs.org/1.3.15/angular-resource.js'></script>

  <div class='intro'></div>

  <!-- Menu -->
  <div class='menu-main'> 

    <div class='menu-icon'>
      <img src='client/img/menu-icon-invert.png'>
    </div>

    <div class='menu-options'>
      <ul>
        <li> <a href='#/'> Home </a> </li>
        <li> <a href='#/blog'> Blog </a> </li>
        <li> <a href='#/projects'> Projects </a> </li>
        <li> <a href='#/contact'> Contact </a> </li>
      </ul>
    </div>

    <div class='menu-links'>
      <ul>
        <li>
          <a target='_' href='https://github.com/tchan247'>
            <img src='client/img/GitHub-Mark-32px.png'>
          </a>
        </li>
        <li>
          <a target='_' href='http://terrychansketchbook.blogspot.com/'>
            <img src='client/img/blogger-40px.png'>
          </a>
        </li>
        <li>
          <a target='_' href='https://www.linkedin.com/in/tchan247'>
            <img src='client/img/linkedin-34px.png'>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <!-- Main Content -->
  <div class='page-main'>

    <div ng-view></div>

  </div>

  <!-- app -->
  <script src='client/app.js'></script>
  <script src='/client/website/components/home/homeService.js'></script>
  <script src='/client/website/components/home/homeController.js'></script>
  <script src='client/website/components/blog/blogService.js'></script>
  <script src='client/website/components/blog/blogController.js'></script>
  <script src='client/website/components/projects/projectsService.js'></script>
  <script src='client/website/components/projects/projectsController.js'></script>

  <!-- admin -->
  <script src='client/admin/admin.js'></script>
  <script src='client/admin/components/login/loginController.js'></script>
  <script src='client/admin/components/login/loginService.js'></script>
  <script src='client/admin/components/edit/editService.js'></script>
  <script src='client/admin/components/edit/editController.js'></script>

  <span id='clientKey' data=""> <?php echo X-Parse-REST-API-Key ?> </span>

<script>
    // var phpObjAsJsonStr = '<?php echo phpObjToJsCompatibleJsonString($php_obj); ?>';
    // var jsObj = JSON.parse(jsObjAsJsonStr);


  // load env variables
  angular.module('app').run(function($http, $rootScope){
    $http.get('get-data.php')
    .then(function(data) {
              console.log("test run", data);
    });



  });

  console.log(<?php echo json_encode($test); ?>;);
  console.log(<?php echo json_encode(test); ?>;);

  // console.log("test", document.getElementById("clientKey").innerText);

</script>

</body>

</html>