// 执行上下文 EC
// ECS: execution context stack
// 代码执行之前，就会创建一个 全局EC

/*
function f1() {
	console.log("f1");
}

function f2() {
	console.log("f2");
	f3();
	console.log("end?");
}

function f3() {
	console.log("f3");
	f4();
}

function f4() {
	console.log("f4");
}

// ============ f1 =============
// ECS栈底是 全局EC。

f1();
// 执行f1时，函数内代码在执行之前，js执行引擎立即创建
// 一个f1的EC，立即把EC压栈ECS。
// f1函数执行完成后，从ECS中弹出f1的EC。


// =============== f2 ==========
f2(); // f2 -> f3 -> f4

// f2执行之前，创建f2 EC，并压f2入栈ECS，

// 因为f2调用了f3，
// f3执行之前，创建f3 EC，并压f3入栈ECS，

// 因为f3调用了f4，
// f4执行之前，创建f4 EC，并压f4入栈ECS，

// ==>
// f4执行完成，f4 EC出栈，
// f3执行完成，f3 EC出栈，
// f2执行完成，f2 EC出栈，

// 最终浏览器关闭时，全局EC 出栈


// ============ 函数EC的生命周期 ======
console.log("\n");

// 变量声明
var a1 = 19,
	a2 = 20,
	a3 = 'sss',
	b1 = {name:"lq"};

// 函数调用
a1 = f1(a1,a2);

// 函数声明
function f1(a,b) {
	// f1 函数的EC：
	// 第一步：扫描参数，a=19，b=20
	// 第二步：扫描函数声明 f2 = function () {}
	// 第三部：扫描变量声明 t=undefined, m=undefined, i=undefined
	var t = 0,
		m = 10;
	for(var i=0;i<a;i++) {
		console.log(i);
	}
	function f2() {
		console.log(f2);
	}
	return a+b;
}



// ========= 变量的作用域 ======
for(var i=0;i<5;i++) { // js中无块级作用域，故for中的 i 为全局作用。不同于C。
	console.log(i);

}

var a;

function myfunc() {
	var a=b=c=10;
	a=111;
	console.log(a);
}

console.log("i: ",i);
console.log("a: ",a);
console.log("b: ",b);


// ========= 函数声明提升 和 变量声明提升 =============
var a =10;
function f1() {
	// 函数的变量提升：因为在函数执行之前，先创建了函数的EC，
	// 在创建EC时候已经把函数里面声明的变量都已经初始化成了undefined
	// 所以，hoisting存在：很多人习惯，把函数内部所有的变量声明都放在函数的头部。

	console.log('1:',a); // a => undefined

	var a = 19;
	console.log('2:',a); // a => 19


	// 特殊情况：变量与函数重名时，函数优先级高。
	console.log(b); // b => function
	var b=9; // js为动态语言，把b重新赋值了
	function b() {
		return 1+2;
	}
	console.log(b); // b=> 9
	
}
f1();
console.log('3:',a); // a=> 10


// =================== 变量提升 练习1 ==============
console.log(a); // undefined
var a = 18;
function d() {
	console.log(a); // undefined
	var a = {age:19};
	// a = {abc:999};
	console.log(a); // {age:19}
}

d();
console.log(a); // 18

// ================== 练习2
// 在浏览器中 全局对象时 window
var a =9;
function b() {
	console.log(a);
}

console.log("\n");
console.log("a" in window);
console.log(window.a);
console.log(window['a']);
console.log(window.b());


// ("a"in window) => true
if(!("a"in window)) {
	var a =1;
}
console.log(a); // => undefined

if(!!("a"in window)) {
	var a =1;
}
console.log(a); // => 1

// ================= 练习3
console.log(a); // => function a (){}, 只有函数 可以提前这样指过去，函数提升。
var a=20;
console.log(a); // => 20
function a() {};

console.log(b);
var b = {age:18};
console.log(b);



// ================= 练习4
f(); // 9 9 9
console.log('c:'+c); // 9
console.log('b:',b); // 9
console.log('a:',a); // unde.
function f() {
	var a=b=c=9; // a：局部，b和c：全局。
	console.log(a);
	console.log(b);
	console.log(c);
}

*/

// ================= 练习5
f();
function f() {
	for(var k=0;k<10;k++) {
		console.log(k);
	}
	console.log(k); // js 无块级作用域
}













