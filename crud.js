
(function(){

  "use strict"

  var app = angular.module("crudApp",["ngRoute"]);
  app.controller("crudCtrl",function($scope){

$scope.message = "manmon is ready"

    $scope.farhad = {
      "name" : ""
    }

    // $scope.test="sdf";
    $scope.personalData = {
                          "name" :"" ,
                          "age"  : "",
                         "phone" : ""
    };
    $scope.personalDataArray = [];
    $scope.save = save;
    function save(){
      var getData = angular.copy($scope.personalData)
      $scope.personalDataArray.push(getData);
      $scope.personalData = {
                            "name" :"" ,
                            "age"  : "",
                           "phone" : ""
      };
      debugger
      console.log($scope.farhad);

    }
    $scope.deletee = deletee;
    function deletee(item){

        $scope.index = $scope.personalDataArray.indexOf(item);
        $scope.personalDataArray.splice($scope.index,1);
        $scope.personalData = {
                              "name" :"" ,
                              "age"  : "",
                             "phone" : ""
        };
    }
    $scope.editData = editData;
    function editData(item){
      $scope.index = $scope.personalDataArray.indexOf(item);
      $scope.personalData = angular.copy(item);

    }
    $scope.update = update;
    function update(){
      var updatedData = $scope.personalData
      $scope.personalDataArray[$scope.index] = updatedData;
      $scope.personalData = {
                            "name" :"" ,
                            "age"  : "",
                           "phone" : ""
      };
    }


  });
  app.config(function($routeProvider){
    $routeProvider
    .when("/insertion",{
      templateUrl : 'insertion.html'
    })
    .when("/list",{
      templateUrl : 'list.html'
    })
    .when("/update",{
      templateUrl : 'update.html'
    })
    .when("/deletedata",{
      templateUrl : 'deletedata.html'
    })
    // .when("/home".{
    //   templateUrl : 'index.html'
    // })
  });

})();
