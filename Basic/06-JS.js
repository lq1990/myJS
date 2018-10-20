/*
// create a new array
var arr= new Array(); // []

arr[0] = 1;
arr[1] = 2;
arr[3] = "sss";
console.log(arr);
console.log(arr.toString() + "\n\n");


var arr3 = new Array(4);
console.log(arr3 + "\n\n");

var arr4 = new Array(3,4,"abc",true, [5,6,7]);
console.log(arr4);
arr4.length=2;
console.log(arr4);


// =========以下为常用的 =======================
var a1 = [];
var a2 = [1,2,"abc",true,{age:19},null, undefined];
console.log(a2);

var a3=[2,,3];
console.log(a3);

// user
console.log(a3[0]);


// =========遍历数组 =========================
var a=[1,2,3,89,"slj",, true];
for(var i=0;i<a.length;i++){
	console.log(a[i]);
}
console.log("\n");


for (var k in a) { // for in 遍历数组，k值是数组的索引编号，不是数组元素。
		console.log(a[k]);
}
// 注意for in 形式会把原型中属性也遍历了。
// 可用 hasOwnProperty() 解决。
for (var k in a) {
	if (!a.hasOwnProperty(k)) {
		continue;
	}
	console.log(k);
}

// 遍历 练习
var t = [1,4,9,'sss',3,"2",2,3,2,1];
//console.log(t);
var rightful = 0;
var ill = 0;

for(var i=0;i<t.length;i++) {
	if (t[i] === 1 || t[i] === 2 || t[i] === 3) {
		console.log(t[i], "right");
		rightful ++;
	}
	else {
		console.log(t[i], "ill");
		ill ++;
	}
}
console.log('#rightful: '+rightful);
console.log('#ill: '+ill);


// 稀疏数组
var t =[1,2];
t[100]="sss";
console.log(t);
// 用 for in 对数组过滤，要注意缺点是：for in也会把原型中属性方法取出。

// ============Array 方法: pop, push, shift ===========
// 栈 
// pop push
var t =['a','b','c','d','e','f'];
console.log(t);
t.pop();
console.log(t);
console.log(t.pop()); // pop 从数组尾部弹出一个元素，并返回这个元素，数组长度减1.
console.log(t);
console.log(t.push(123)); // push 从尾部压入一个元素，并返回数组新长度。
console.log(t);

// 队列 
// shift 从数组头部弹出一个元素，并返回此元素，数组长度减1.
// 利用push尾部进 和 shift头部出，可实现队列数据结构

var t =[];
t.push(1);
t.push(2);
t.push(3);
console.log(t);

console.log(t.shift());
console.log(t);
console.log(t.shift());
console.log(t);

var t =['c','a','d','e'];
console.log(t);
t.sort();
console.log(t);

var arr=[33,10,2,222];
console.log(arr);
arr.sort(); // 数字会被转换为 string，再进行比较，因此数字sort后结果不对。
console.log(arr);

// ============实现数组中 数字的排序==============0
var compareF = function compareNum(a,b){
	return a-b; // return -: a<b, 0: a=b, +:a>b
}

var m = [3,20,10,9,11,12];
console.log(m);

// 默认sort，转换成string后进行比较
//m.sort();
//console.log(m);

// 利用函数式编程，sort方法可以接受一个比较大小的func，例如这个func可以实现数值的比较
//m.sort(compareF)
//console.log(m);
// 优化版本
m.sort(function(a,b){
	return a-b;
}) 
console.log(m);


// ================数组连接==================
var t =[1,2,3];
console.log(t);
var t2 = t.concat("ss",true,222);
console.log(t2);
var t3 = t.concat(['ss',true,222]);
console.log(t3);

// ============== join, toString ==============
console.log(t.toString())
console.log(t.join())
console.log(t.join('-')) // join默认用逗号分隔，可自定义分隔方式。

// =============== slice=============
var t = [0,1,2,3,4,5];
var a1 = t.slice(2);
console.log(a1); // 2,3,4,5

var a2 = t.slice(2,5);
console.log(a2); // 2,3,4

var a3 = t.slice(-1);
console.log(a3);

var a4 = t.slice(-3,-1);
console.log(a4);

// =============== splice (注意：inplace)==============
var t =[0,1,2,3,4,5];
console.log('t: '+t);

// 若只传一个参数，则从这个idx删除到末尾。
//var a1 = t.splice(3); // t: [0,1,2] 
//console.log('a1: '+a1);
//console.log('t: '+t);

// 传2个参数的话，第一个参数是start，第二个参数是 删除的个数
//var a2 = t.splice(3,1);
//console.log(t);
//console.log(a2);

// 传2+个参数的话，第一个:start，第二个：删除的个数，第三个及以后：要插入到start后的元素
//var a3 = t.splice(3,2,'sss','abc','cs');
//console.log(a3);
//console.log(t);

// practise, 在某一位置处插入元素
//t.splice(3,0,'a');
//console.log(t);

// 替换数组中的3位'a'
t.splice(3,1,'a');
console.log(t);

// ============ 数组逆序练习 ===============
// 数组反序
var t =[90,8,34,2,39,87,22,10];
console.log('t: '+t);
//t.reverse();
//console.log(t);

// 自己实现反序，不用api
// 方法1： 
var t2 = [];
for(var i=t.length-1;i>=0;i--) {
	t2.push(t[i]);
}
console.log('t2: '+t2);

// 方法2：
var temp;
for(var i=0;i<parseInt(t.length/2);i++) {
	temp = t[i];
	t[i] = t[t.length-1-i];
	t[t.length-1-i] = temp;
}
console.log(t);

// ============ 数组去重练习 ==========
var t = [90,8,34,8,2,39,90,87,34,22,10];
console.log(t);
// 思路1： t.indexOf()，但在IE8 不支持，故不建议用。

// 思路2： 哈希属性值： {}， 重复的属性会进行覆盖
var h = {};
for(var k in t) { // 注意：for in中的k为t中数的idx
	var str = t[k].toString();
	h[str] = t[k]; // 利用了object属性不能重复的特性
}
var arr=[];
for(var i in h) {
	arr.push(h[i]);
}
console.log(arr);

// 思路3： 新数组中判断元素是否已经在新数组中
var arr = [];
arr.push(t[0]); // 第一个元素不可能重复，故先插入第一个。
for(var i=1;i<t.length;i++) {
	for(var k=0;k<arr.length;k++) {
		if ( t[i] === arr[k]) {
			break;
		}
	}
	if (k === arr.length) {  // 此处k，不同于c语言中的局部变量。k和上面for中k是一致的。
		arr.push(t[i]);
	}
}
console.log(arr);

// =============求数组 和 平均值==================
var t = [90,8,34,2,39,87,22,10];
var sum=0;
for(var i=0;i<t.length;i++) {
	sum += t[i];
}
var ave = sum/t.length;
console.log('sum: '+sum);
console.log('average: '+ave);

// =============求数组中最小值及索引==================
var t = [90,8,34,2,39,87,22,10];
var min,idx;
min = t[0];
idx = 0;
for(var i=1;i<t.length;i++) {
	if(min>t[i]){
		min = t[i];
		idx = i;
	}
}
console.log('min: '+min,', idx: '+idx);

 // ==================== 数组， 冒泡排序 =========================
var t = [90,8,1,34,2,39,87,22,10];
console.log(t);

// 升序
for (var j = 0;j<t.length-1;j++) {
	for(var i=0;i<t.length-1-j;i++) {
		if(t[i] > t[i+1]) {
			var temp = t[i];
			t[i] = t[i+1];
			t[i+1] = temp;
		}
	}
}
console.log(t);
*/ 
 // ================== 数组排序，函数式编程 ========================
 var t = [90,8,1,34,2,39,87,22,10];
 console.log(t);
 
 t.sort(function(a,b){return a-b;});
 console.log('t_sort: '+t);
 













