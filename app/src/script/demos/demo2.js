angular.module("myApp",[])
.controller("myController",["$scope",function($scope){
	var friends = [
		{
			name:"lili",
			phone:"15210479943"
		},{
			name:"lucy",
			phone:"13124509875"
		},{
			name:"amy",
			phone:"15236729387"
		},{
			name:"xiaoai",
			phone:"13546277519"
		}
	]
	$scope.friends = friends;
	$scope.searchText = "";
	$scope.search = function(obj){
		if($scope.searchText != ""){
			if(obj.name.toLowerCase().indexOf($scope.searchText) != -1  || obj.phone.toLowerCase().indexOf($scope.searchText) != -1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}
}])

//promise
$.ajax("../mock/livelist.json")
.done(function(e){
	console.log(e);
})
.fail(function(){
	console.log("执行失败")
})


$.when($.ajax("../mock/livelist.json"),$.ajax("../mock/liveback.json"))
.done(function(data1,data2){
	console.log(data1)
	console.log(data2)
})
.fail(function(){
	console.log("执行失败")
})


var dtd = $.Deferred();//新建一个deferred对象
var wait = function(dtd){
	//var dtd = $.Deferred();//新建一个deferred对象
	var task = function(){
		alert("hello");
		dtd.resolve(); //手动把deferred对象的运行状态改变为已完成done
		//dtd.reject(); //手动把deferred对象的运行状态改变为已失败fail
	}
	setTimeout(task,2000)
	return dtd.promise(); //在原来的deferred对象上返回一个新的deferred对象，屏蔽与改变执行状态有关的方法（resolve,reject）
}


var d = wait(dtd)

$.when(d) //wait()
.done(function(){
	alert("ok")
})
.fail(function(){
	alert("error")
})


$.when($.ajax("../mock/livelist.json"))
.then(function(){
	console.log("ok")
},function(){
	console.log("no")
})