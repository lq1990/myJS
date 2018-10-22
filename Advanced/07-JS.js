/*
var m=0,n=19; // 把m，n，add() 标记为"进入环境"
add(m,n); // 把a，b，c标记为进入环境

console.log(n); // 把a b c标记为 "离开环境"，等待垃圾回收。

function add(a, b) {
	a++;
	var c = a+b;
	return c;
}
*/

// =========== GC使用场景优化 ===================
var a = [1,2,32,44,8,85,4];
a.forEach(function(item,index,array){
	console.log(item);
})

// =========1.用完后，数组清零，让gc尽快回收a用到的空间。
// a=null // 不好，类型都改了
// a=[] // 不好，内存中还是有一个空数组，原数据等到被收
a.length=0; // good, 可以直接让数组清空，并且数组类型不变

// ======== 2.对象 尽量复用
var t ={};
for(var i=0;i<10;i++){
	t.age=1;
	t.index = i;
	console.log(t);
}

t=null; // 对象不用时，立即置为null，等待被回收

// ======= 3.循环体中，函数表达式若复用的话，func写在循环外面。





