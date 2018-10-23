/* =========== try, catch, finally =========
try {
	console.log(1);
	var t = new abc(); // 遇到错误，直接跳转到catch
	console.log(2); // 不会被打印
} catch (e){
	// console.dir(e);
	console.log("error message: "+e.message);
} finally {
	console.log("finally");
}

alert("789");
console.log("t: "+t);
*/
// =========== throw ===========
try {
	add("33",44);
} catch (er){
	console.dir(er);
}

alert(123);

function add(a, b) {
	if(typeof(a)!="number") {
		var e = new Error(); // 考虑到浏览器兼容性。
		e.message = "not a number...";
		e.name = "para. type error";

		throw e; 
		// 遇到throw后，程序就停住了，代码转到catch。
		// 若无catch，则js程序结束。
		// 可用 try,catch。
	}
	return a+b;
}





