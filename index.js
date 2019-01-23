// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友'+jspang+'。这节课我们学习字符串模版。';
// document.write(blog);
// let jspang='技术胖';
// let blog = `非常高兴你能看到这篇文章，我是你的老朋友${jspang}这节课我们学习字符串模版。`;
//字符计算
// let a=1;
// let b=2;
// let result=`${a+b}`;
// document.write(blog.includes(jspang));
// document.write(blog.startsWith(jspang));
//复制字符串
// document.write('*'.repeat(3));
// 二进制 Binary
// let binary = 0B010101;
// console.log(binary);
// // 八进制
// const octal = 0o666;
// console.log(octal);

// 如何判断是否是数字
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('lj'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// 判读NaN
// console.log(Number.isNaN(NaN));

//Number.isInteger 判断是否为整数
// let a= 918.1
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// ES6新增的数组知识
let json ={
    '0':'lj',
    '1':'梁娟',
    '2':'太极员工',
    length:3
}
//把json数组转换成array  Array.from方法
// let arr = Array.from(json);
// console.log(arr);

// Array.of方法
// let arr = Array.of(3,4,5,6);
// console.log(arr);

//find() 实例方法
// let arr=[1,2,3,4,5,6,7,8.9];
// console.log(arr.find(function(value,index,arr){
//     return value >5;
// }))

// fill
// let arr=['lj','梁娟','太极公司'];
// arr.fill('web',1,3);
// console.log(arr);

// //数组循环
// let arr=['lj','梁娟','太极公司'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

//entries方法
let arr=['lj','梁娟','太极公司'];
let list = arr.entries();
console.log(list.next().value);
console.log('******************')
console.log(list.next().value);
console.log('&&&&&&&&&&&&&&&&&&&')
console.log(list.next().value);
console.log('$$$$$$$$$$$$$$$$$$$')