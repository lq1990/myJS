
// ============== 闭包模拟私有变量 =============
/*
// 1、模拟私有var
function Person() {
	var age =10; // 私有var

	this.getAge = function () {
		return age;
	}	

	this.setAge = function (a) {
		age=a;
	}
}
var p = new Person();


// 2、模拟
function Person(){
	var age = 100;

	return {
		getAge: function() {
			return age;
		},

		setAge: function(num) {
			age = num;
		}
	}
}

var p = Person();

// ================ 模块化演进 =========================
function demo() {
	var a = b = c = 9;
}

demo();
console.log(a); // error
console.log(b);
console.log(c);

// js中本没有命名空间，解决不了命名冲突问题。

// ---------- 解决方法: 第一个尝试，用命名空间--------
// a.js
var Shop = {};
Shop.User = {};
Shop.User.UserList = {};
Shop.User.UserList.length = 19;


// b.js
Shop.User.UserDetail = {};
Shop.User.UserDetail.length = 20;

console.log(Shop.User.UserList.length);
console.log(Shop.User.UserDetail.length);
*/
// ---------- 第二次尝试：自执行函数 ----------
// a.js
;(function(m){
	var a =9;
	console.log(m*a);
})(90);;

// b.js
;(function(){
	var a ="abc";
})();

// -----------第三次尝试：希望把自己基类的很多工具封装一个整体的框架----------------------
// lq.js
(function(w){
	if(!w.lq){
		w.lq={};
	}

	w.lq.btn = {
		getVal: function () {
			console.log("val");
		},
		setVal: function(){
			console.log("setVal");
		}
	};
	// window.lq = lq;
})(window || {});

// lq.animate.js
(function(w){
	if(!w.lq){
		w.lq={};
	}
	w.lq.animate = {};
})(window || {});
// lq.form.js
(function(){
	if(!w.lq){
		w.lq={};
	}
	w.lq.form = {};
})(window || {});





