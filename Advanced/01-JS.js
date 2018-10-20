var a = 9, b;
var c={age:9},d;
console.log('c: ',c);

// 把a的值类型赋值给b
b=a; 
b=19;
console.log(a);
console.log(b);

// 如果是引用类型，赋值
d = c; // 把从引用类型赋值给了d，只是复制了地址，而并非把指针指向的obj复制。
d.age=22;
console.log('c: ',c);
console.log('d: ',d);

