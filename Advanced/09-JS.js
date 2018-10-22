/* ============ 闭包 ===========
function foo(x) {
	var tmp = 1;
	return function (y) {
		console.log(x+y+(++tmp));
	};
}

var bar = foo(2); // bar指向了一个匿名函数。bar是一个闭包：函数+ x tmp
bar(10); // bar 和 x tmp形成闭包。
bar(20);
bar(30);



// ============== 匿名自执行函数，可用于和闭包 配合 ============
;(function(a){
	console.log(a);
})(8); // 模拟块级作用域


// ============== 循环注册dom事件的典型错误，利用闭包解决 =====

var lis = document.querySelectorAll("li");
console.log(lis);

// 循环注册事件的index的典型错误
// for(var i=0;i<lis.length;i++) {
// 	lis[i].onclick = function(e) {
// 		// i是父函数里面的变量
// 		console.log(i);
// 	};
// }


// 把循环注册事件做成 自执行函数来传递变量i
for(var i=0;i<lis.length;i++) {
	// lis[i].onclick = function(e) {
	// 	// i是父函数里面的变量
	// 	console.log(i);
	// };
	(function(a){
		lis[a].onclick = function(e) {
			console.log(a);
		};
	})(i); // i会传给a

}
*/
// =========== setTimeout 的闭包应用 ======
// setTimeout: 当xxx毫秒后，执行当前的函数体。
// setTimeout(function(){
// 	console.log("sss");
// },1000);// 1000 ms

for(var i=0;i<10;i++) {
	setTimeout(function(){
		console.log(i);
	},1000);
}

// 解决
for(var i=0;i<10;i++) {
	(function(a){
		setTimeout(function(){
			console.log(a);
		},1000);
	})(i); // 闭包可实现 块级作用域，即局部变量。

	// setTimeout(function(){
	// 	console.log(i);
	// },1000);
}









