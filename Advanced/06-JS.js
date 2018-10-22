// ============== function overload =======
// 创建一个矩形，若传1个参数，返回正方形。
// 若传2个参数，返回矩形
// 使用arguments，就可以实现灵活的类似于函数重载的功能。
/*
function Rect() {
	if(arguments.length==1) {
		this.width = arguments[0];
		this.height = arguments[0];
	}
	if(arguments.length > 1) {
		this.width = arguments[0];
		this.height = arguments[1];
	}

	// 由于跟原型上的toString重名，会覆盖obj原型上的通toString方法。
	this.toString = function () {
		// console.log("width: "+ this.width +
		// 	" height: "+this.height);
		return "width: "+ this.width +
			" height: "+this.height;
	}
}

var r1 = new Rect(10);
console.log(r1.toString());

var r2 = new Rect(10,20);
console.log(r2.toString());


// ============= 函数递归调用 =============
// 普通
var sum=0,
	n=100;
for(var i=1;i<= n;i++) {
	sum += i;
}
console.log(sum);

// 递归实现, 递归必须有一个出口
function sumNum (num) {
	if(num<=1) return num;

	return sumNum(num-1) + num;
}

var t = sumNum(10);
console.log(t);

// ======== 递归练习: 求阶乘
function factorial(n) {
	if ( n== 1) return 1;

	return factorial(n-1)*n;
}

var t = factorial(5);
console.log(t);

// ========== 递归练习：斐波那契
// var n1 = 0,
// 	n2 = 1;
function fibonacci(num) {
	if(num==1) return 1;
	if(num==0) return 0;
	return fibonacci(num-1)+fibonacci(num-2);
}

for(var i=0;i<10;i++) {
	var t = fibonacci(i);
	console.log(i+": "+t);
}
// 递归特点：好理解，但效率低。 最好还是用for来做。


// =========== 函数式编程,sort,map, forEach ============
var t =[2,3,44,4,123,23,5,6,3,7,99];
console.log(t.sort());
// console.log(t);

t.sort(function(a,b){return a-b} // t.sort(): inplace
	
)
console.log(t);

// ==============数组的 map方法
var t =[1,2,36,9,20];
for(var i in t) {
	console.log(t[i]);
}

// 对数组中每个元素都进行乘以2
var m = t.map(function(item,index,array) {
	// item：当前的选项
	// index：当前选项的索引
	// array：当前数组

	// return：返回每个项处理的结果
	return item*2;
});
console.log(m);

// ========== 数组的 forEach 方法

var m =["22",true,1,99,98];
m.forEach(function(item, index) {
	console.log("index: "+index+" "+item);
})
// 和 map相比，forEach 返回unde。
*/























