/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var horizontalNav  = angular.module("horizontalNavigation",[]);
horizontalNav.controller("HnavController",['$scope','$http',function($scope,$http){
       //$scope.ctrlName = "Hello World!asdasdasd";
       $http.get("JSON/navdata.json").success(function(data){
          $scope.navObj = data;
       });
}]).directive('hnav', function() {
  return {
    templateUrl: 'templates/navigationDOM.html'
  };
}).directive('flyout', function() {
  return {
    templateUrl: 'templates/navigationDOMFlyout.html'
  };
});


