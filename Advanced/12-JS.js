/*
// 创建一个正则表达式对象，\d+
var exp1 = new RegExp("\\d+","g"); // type 1

var exp2 = /\d+/g; // type 2

console.log(exp1);
console.log(exp2);

exp1.test("jfkajfuiu8789")


var str = "32,34,56";
var exp = /\d{2}/g;

// console.dir(exp.exec(str));
var temp;
while ((temp = exp.exec(str)) != null)  {
	console.log(exp.lastIndex); // 当前匹配完之后，下一次匹配开始的位置。
	console.log(temp[0]);
}

// 如果有分组
var str2 = "12abc,34,fde,45asf";
var exp2 = /\d{2}(\w)(\w)(\w+)/g; // 作分组用
console.log(exp2.exec(str2));
console.log(exp2.exec(str2));
console.log(exp2.exec(str2));


// 字符串中支持正则的方法
str.search();
str.match();
str.replace();
*/

// ============== 正则高级应用：日期替换 ====
var t = "1392945632000,mss,Date(1392945632000)";
// var m = t.replace(/.*Date\((\d+)\).*/g,"$1");

var n = eval(t.replace(/.*(Date\(\d+\)).*/g,"new $1"));
// eval(str)：计算str，执行其中的js代码，这里str是new Date()

console.log(n.toString());



