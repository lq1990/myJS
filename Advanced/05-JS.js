// 函数的调用模式

/*
// ============ 1. 对象方法调用模式 =========
// 定义构造函数
function Dog (dogName) {
	this.name = dogName;
	this.age = 0;

	this.run = function () {
		console.log(this.name +
			", its age is "+this.age+ " and it is running...");
	};
	// 如果函数当做构造函数调用，
	// 并没有返回任何数据，默认返回this
}

var d =new Dog("大黄"); // 构造函数的return 就是默认的他this。此处的 d 就是func中this。this的数据给了d。

d.run(); // 调用d对象实例的run方法，这就是对象的方法调用模式。
// 在方法调用模式中，this指向当前调用者的对象 即d



// ========= 2. 构造器调用模式 =======
// 关键字：new
function Cat() {
	// step 1：创建一个空对象
	// step 2：给函数上下文赋值 新对象 this=新对象
	this.age=19;
	this.name="cat"; // 
	this.run= function ( ) {
		console.log(this.name+" run...");
	}

	// 默认返回this
	// return 3 // 即使有返回值，如果返回值类型是简单类型（e.g. null, unde. 123），则简单类型会被忽略。
	// 但如果return一个 引用类型，则返回这个引用类型。
	return {
		name:"ddd",
		run:function () {
			console.log("well");
		}
	};
	// return null;
}

var cat = new Cat(); // new & 构造函数： 构造函数调用模式

cat.age=1;
cat.name="aaa";
cat.run(); // 方法调用模式


// =========== 3. 函数直接调用模式 ==========

function f(a,b) {
	console.log(a+" "+b);
	console.log(this); // this:window。 严格模式：unde.

}

// f(2,3); // 函数直接调用

console.log("\n");

function Dog() {
	this.age=19;
	console.log(this);
}

Dog(); // 函数执行模式，输出window
var d = new Dog(); // 构造函数执行模式，输出d对象


// ============ 4. call、apply 调用模式（借用方法模式）
function sum(a,b) {
	console.log(this);
	return a+b;
}

// sum(1,2); // => window

var t ={
	name:"lq"
}

var m=sum.call(t,2,3);// t -> this, 所以log输出 t这个obj，然后return  a+b 给m
// console.log(m);

var m2=sum.apply(t,[1,2]);
// console.log(m2);

// apply 传的是 数组

// =========== 注意：=========
// 如果传递的第一个para不是引用类型（func,obj,arr），而是简单类型，则会出现一些变化。
// 若传递一个para是：null、unde、则转成window
// 若传的是 number、string、布尔，则转成对应的包装类型
console.log("\n");
sum.call(null,3,4,2);
sum.call(undefined,3,4,2);
sum.apply("abc",[4,2]);


// ============== 函数调用 练习题 ============
// 1. 定义按钮类，要求按钮类的构造函数可以接受参数初始化按钮的宽、高、坐标xy。
function Btn(width, height, x, y) {
	// 构造函数内部初始化
	this.width = width;
	this.height = height;
	this.px = x;
	this.py = y;
}
var b = new Btn(100,100,30,30);


// 2. 借用Math 的min方法，实现求数组的[2,9,33]的最小值
var t = Math.min(10,29,3);

var m = Math.min.apply(null,[2,9,33]);
// 刚好apply里面的就是数组。
console.log(m);


// 3. 把类数组转换成真正的数组
var t ={}; // 此为类数组，与数组类似，但不是数组。
t[0] = 1;
t[1] = true;
t[2] = "abc";
t.length = 3;

// var m = [1,2,3];
// m.slice(0,)

// 借用slice方法，把this指向t对象，那么slice方法就会返回t对象的对应的数组。
var k = Array.prototype.slice.call(t,0);
// 通过slice方法可以把类数组转成真正的数组。
console.log(k);
*/
// 4，判断代码输出结果
function Dog() {
	console.log(this);
} 

Dog(); // 函数调用模式，=> window
console.log("\n");

var d = new Dog(); // 构造函数调用模式，this == d
console.log(typeof(d));

Dog.call(null); // 借用调用模式，window


new Dog();
new Dog();
new Dog();






















