//========== 函数参数传值：传值、传引用 =====
/*
var a=9,
	b={name:"lq",age:18};

function demo(c1, c2) {
	c1=29;
	c2.name="abc";
}

demo(a,b);
// 函数的的参数，如果是简单类型会做一个值类型的数值副本传到函数内部
// 对于引用类型，会将引用类型的地址值赋值给函数的参数
// 类似于C语言中，函数的参数传递。

console.log(a);
console.log(b);

// ============= 函数的arguments： 实参、形参 数目不等的话 ========
function max(a,b) {
	console.log(arguments); 

	for(var i=0;i<arguments.length;i++) {
		console.log(arguments[i]);
	}

	if (a>b) {
		return a;
	} else {
		return b;
	}
	
	// 每个函数内部都可以访问arguments, 其内存放着我们传递给函数的所有参数（实参）。
	// arguments：不是一个数组，它的属性：0，1,2,3...
	// arguments 有一个 length 属性，属性值为传递实参的个数。
}

var t = max(9,10); 
console.log(t);


var m = max(9,10,20,30);
console.log(m);
console.log(max.length); // 函数的length属性：形参的个数

// ================实现max方法，可以接受任意多个参数

function myMax() {
	if(arguments.length<=0)
		return NaN;
	// 获取实参：使用arguments
	var max=arguments[0];
	for(var i=0;i<arguments.length;i++){
		if(max<arguments[i]) {
			max=arguments[i];
		}
	}
	return max;

};

var t = myMax(1,2,3,4,5);
console.log(t);
*/
// ===============函数的参数对象化封装========
// 若参数多于4个，则开发人员难以记忆。
// 最好将参数封装成对象来接受，因为对象是无序的，方便使用。

function rect(rectObj){
	console.log(rectObj.text, rectObj.y);
};

var rectObj = {
	x:19,
	y:20,
	width:200,
	height:300,
	bgcolor:'#ccc',
	text:"lq"
};

// console.log(rectObj);
rect(rectObj);





