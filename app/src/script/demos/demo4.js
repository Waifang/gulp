angular.module("myApp",[])
.controller("myCont",["$scope",function($scope){
	var views = [
		{
			firstname:"lili",
			lastname:"vane",
			gender:"Female",
			salary:12333.5,
			birthday:"1464380602412"
		},
		{
			firstname:"lucy",
			lastname:"rose",
			gender:"male",
			salary:232334.2,
			birthday:"1480325514047"
		},
		{
			firstname:"amy",
			lastname:"hot",
			gender:"Female",
			salary:66880.5,
			birthday:"1457840514047"
		},
		{
			firstname:"lala",
			lastname:"bear",
			gender:"male",
			salary:68000,
			birthday:"1480678955247"
		}

	]
	$scope.searchOne="";
	$scope.searchTwo="";
	$scope.views = views;
	$scope.title = 'firstname';  
    $scope.desc = 0;  
	$scope.a = false; 
	$scope.b = false; 
	$scope.b2 = false; 
	$scope.b3 = false; 
	$scope.b4 = false; 
	$scope.b5 = false; 
	$scope.b6 = false; 
	$scope.search = function(obj){
		if($scope.searchOne!=""){
			if(obj.firstname.toLowerCase().indexOf($scope.searchOne.toLowerCase()) != -1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}
	$scope.searchs = function(obj){
		if($scope.searchTwo!=""){
			if(obj.lastname.toLowerCase().indexOf($scope.searchTwo.toLowerCase()) != -1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}
	$scope.add = function(){
		$scope.a=true;
		$scope.c=false;
		$scope.d=false;
		$scope.e=false;
		$scope.f=false;
		$scope.g=false;
	

	}
	$scope.add2 = function(){
		$scope.a=false;
		$scope.c=true;
		$scope.d=false;
		$scope.e=false;
		$scope.f=false;
		$scope.g=false;
	

	}
	$scope.add3 = function(){
		$scope.a=false;
		$scope.c=false;
		$scope.d=true;
		$scope.e=false;
		$scope.f=false;
		$scope.g=false;
	

	}
	$scope.add4 = function(){
		$scope.a=false;
		$scope.c=false;
		$scope.d=false;
		$scope.e=true;
		$scope.f=false;
		$scope.g=false;
		

	}
	$scope.add5 = function(){
		$scope.a=false;
		$scope.c=false;
		$scope.d=false;
		$scope.e=false;
		$scope.f=true;
		$scope.g=false;
	

	}
	$scope.add6= function(){
		$scope.a=false;
		$scope.c=false;
		$scope.d=false;
		$scope.e=false;
		$scope.f=false;
		$scope.g=true;
	

	}
}])