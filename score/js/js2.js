var arr = [];
var arr2 = new Array();
arr2.length; //Propertie (객체의 변수는 Propertie)
arr2.push("A"); // Method (객체의 함수는 Method)

console.log(arr2,length);
console.log(arr2);
arr2.push("B");
console.log(arr2.length);
console.log(arr2);

var hongkd = {
name:"홍길동",
age : 25,
gender:"M",
run: function(){
	return "동에번쩍 서에번쩍";
}
};
hongkd.age = 27;
console.log(hongkd);

var hongks = {
	name:"홍길순",
	age : 22,
	gender:"F",
	run: function(){
		return "동에번쩍 서에번쩍";
	}
	};

//Immediatly funtion- 즉시실행함수
(function abc() {
	console.log("ABC!");
}());
//  위와 같은 문법 var Hong = (function(){}());

//제대로된 Es5 자바스크립트 객체 (class)
var Hong = (function(){
	//Constructor
	function Hong (name, age, gender) {
this.name = name;
this.age = age;
this.gender = gender;
	};
	Hong.prototype.run = function(){
console.log(this.name + "이 동에번쩍 서에번쩍");
	};
	return Hong;
}());

var hkd = new Hong ("홍길동", 25, "M");
var hks = new Hong ("홍길순", 21, "F");
console.log("hkd.name");
console.log("hks.name");
hkd.run();
hks.run();


/*es6

class Hong2
constructor(){
	run()
}

*/
	// var hkd = new Hong("홍길동", 27, "M");
	// var hks = new Hong("홍길순", 25, "F");