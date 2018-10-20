/*
var t = new String("abcdkjfklajklfAFDAffdaf");

console.log(t.charAt(1));
t.charCodeAt();
t.concat();
t.slice();
t.toLowerCase();
t.toUpperCase();
t.replace();
t.trim();
t.substring();
t.substr();
String.fromCharCode();

var t ="01234567";
console.log(t.split('3'));

var t = "1,2,3,4,,5,6";
console.log(t.split(','));

var t1 = t.split(',').join('-');
console.log(t1);

// ================ string: indexOf, lastIndexOf ===========
var t ="qijdanng";
t.indexOf(2, start_)
t.lastIndexOf( , );

// ==================== 字符串截取与逆序练习 =======================
var t ="abcdefg";

var m = t.slice(4);
var m1 = t.substring(4);
var m2 = t.substr(4);
console.log('m: '+m+' '+m1+' '+m2 );

// string没有reverse方法，必须将str转成数组后，数组有reverse方法
var t ="abcdefg";
var arr = t.split('');
console.log(arr);

arr = arr.reverse();

var result = arr.join('');
console.log(result);

// t.split('').reverse().join(''); // 方法链

// 新方法： 从后往前遍历，然后用空字符串取累加
var t ="abcdefg";
var res = "";
for(var i=t.length-1;i>=0;i--) {
	res += t[i]; // 注意str的 + 
}
console.log("res: "+res);

// =========== 判断一个字符串中出现次数最多的字符，统计这个次数=============
var t = "accccccccbbbbbcdefgaabbcca";

 // 思路： 哈希
 var hash = {};
 for(var i=0;i<t.length;i++) {
	 var k = t[i];
	 if (hash[k] == null)
		hash[k] = 1;
	else 
		hash[k]++;
	 
 }
 console.log(hash);
 
 // 查找 字符
 var maxNum_char=0;
 var max_char;
 for (var h in hash) {
	 if(maxNum_char < hash[h]) {
		 maxNum_char = hash[h];
		 max_char = h;
	 }
 }
console.log(max_char, maxNum_char);
*/
// ================  输入两个string，从第一个str中删除第二个str中的所字符。不用replace================
var str1 = "They are students";
var str2 = "aeiou";
var res = "";
// 思路：用indexOf，返回索引或-1
for(var i=0;i<str1.length;i++) { // 不用 for in 去遍历str
	if(str2.indexOf( str1[i] ) == -1) {
		res += str1[i];
	}
}
console.log(res);





































