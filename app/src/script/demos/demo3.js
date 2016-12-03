angular.module("myApp",[])
.controller("myController",["$scope","$location","$timeout","$interval",function($scope, $location,$timeout,$interval){
	$scope.url = $location.absUrl();//内建的 $location 服务获取当前页面的 URL
	$scope.txt = "hello world!";
	$timeout(function () {   //$timeout 服务对应了 JS window.setTimeout 函数。
        $scope.txt = "How are you today?"; 
    }, 2000);
    $interval(function () {   // $interval 服务对应了 JS window.setInterval 函数。
         $scope.times = new Date().toLocaleTimeString();
    }, 1000);
}])