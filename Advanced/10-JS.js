/*
// ========== 工厂创建对象的方式 ===========
function createCat(age, name) {
	// body...
	var o = new Object();
	o.name = name;
	o.age = age;
	o.run = function () {
		console.log(o.name+" running...");
	}
	return o;
}

var c = createCat(19,"aaaa");

// 优点： 批量创建

// 缺点： 
// 1. 对象方法不能跟其他对象共享，多占用内存。
// 2. 不能识别对象的原型及构造函数。

// ============ 构造函数创建对象 ===========
function Cat(age, name) {
	this.age = age;
	this.name = name;
	this.run = function () {
		console.log(this.name + " running...");
	};
}

var c1 = new Cat(1,"bbb");
c1.run();


// ========= 原型构造对象的模式 ，组合模式（构造函数 加 原型）==========
function Cat() {
	this.age = 19;

	// 若需共享的方法和属性，一般放在原型中定义。
	// this.run=function () {
	// 	console.log("run...");
	// }
}

// 原型中定义属性和方法。原型的话，类比于C中继承概念。
Cat.prototype.run= function () {
	console.log(this.name, this.age);
};
Cat.prototype.name = "black cat";
// 具体哪些方法、属性定义在里面、外面。取决于私有、公有。



var c1 = new Cat();
var c2 = new Cat();

console.log(c1.age);
console.log(c1.name);
c1.run();
// console.log(c2);
c1.name="good cat."; // 对象的属性分为：读取、设置。

// ========== 继承 =========================================
// ======= 原型继承 ===============

function Animal(age, name) {
	this.age = age;
	this.name = name;
}

Animal.prototype.run = function() {
	console.log(this.name + " running...");
}

function Cat(age, name) {
	this.age=age;
	this.name=name;
}

// 原型inherit方式
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

var c = new Cat(19,"a cat"); // 希望cat继承Animal 属性方法

c.run();

// 问题
// 1. 子类的构造函数的参数，没法传递给父类的构造函数。
// 2. 子类的原型的constructor会被改变，需要自己手动改。
// 3. 如果父类里有引用类型的属性，所有子类会共享这个引用类型，即可以读写它。


// ========== 组合继承模式 =================
function Animal(age, name) {
	this.age = age;
	this.name = name;
	this.foods = ["water","apple"];
}

Animal.prototype.run=function() {
	console.log(this.name+" running...");
};


// 将子类、父类的属性串起来
function Cat(age, name) {
	Animal.call(this, age, name); // 借用父类的构造函数给子类创建实例属性。

}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;


var c = new Cat(19,"acat");
// 缺点：父类 被执行了2次。



// ============= 原型式继承模式 =============
// 本质：借用一个obj 构造另一个obj
// 缺点：所有子类还是会共享父类的 引用类型的属性。
function object(o) {
	function F() {}

	F.prototype = o; // 让空函数的原型指向o对象。
	return new F(); // 创建一个f实例，f的内部原型指向o对象。
}

var m = {age:18, name:"lq", friends:["abc","add"]};

var m1 = object(m);
// 优点：不用new构造函数，就可以构造other obj
// 缺点：所有构造出来的实例会共享原型对象上的引用类型的属性。

// EC5:  Object.create() ========
// var m2 = Object.create(m);

// ============== 寄生继承模式 ===========
function object(o) {
	function F(){};

	F.prototype = o;
	return new F();
}

// 寄生继承方式： 传一个对象到一个方法（工厂方法），方法
// 内部根据传来的对象构造一个新对象，并对新对象进行扩展增强，
// 返回新对象。
function createPerson(p) {
	var o = object(p);
	o.say = function () {// 进行扩展
		console.log("hi");
	}
	return o;
}
*/
// =========== 究极： 寄生组合继承模式 ============
function Animal(age,name) {
	this.age = age;
	this.name = name;
	this.foods=["aa","bb"];
}

Animal.prototype.run = function () {
	console.log(this.name+" running...");
};

function Cat(age, name) {
	Animal.call(this, age ,name);

}

// 原型式继承 --> 寄生继承
function object(o) {
	function F( ){};

	F.prototype = o;
	return new F();
}

function inheritFrom(o) {
	var t = object(o);
	t.constructor = Cat; // 寄生继承的 增强部分。
	return t;
}

// 
// Cat.prototype = new Animal();
Cat.prototype = inheritFrom(Animal.prototype);

var c = new Cat(19,"ki");
var c2 = new Cat(119,"koooi");
c.run();
c2.run();


























