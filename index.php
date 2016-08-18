<?php include_once("home.html"); ?>

<?php 
  // function phpObjToJsCompatibleJsonString($phpObj) { 
  //     return str_replace("'", "\\'", str_replace("\\","\\\\", json_encode($phpObj, JSON_UNESCAPED_UNICODE)));
  // } 

?>

<span id='clientKey' data="<?php echo X-Parse-REST-API-Key ?>"> </span>

<script>
    var phpObjAsJsonStr = '<?php echo phpObjToJsCompatibleJsonString($php_obj); ?>';
    var jsObj = JSON.parse(jsObjAsJsonStr);


  // load env variables
  angular.module('app').run(function($http, $rootScope){
    $http.get('get-data.php')
    .then(function(data) {
              console.log("test run", data);
    });

    console.log("test", document.getElementById("clientKey").getAttribute("data");

  });

</script>
