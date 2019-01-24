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
// let json ={
//     '0':'lj',
//     '1':'梁娟',
//     '2':'太极员工',
//     length:3
// }
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
// let arr=['lj','梁娟','太极公司'];
// let list = arr.entries();
// console.log(list.next().value);
// console.log('******************')
// console.log(list.next().value);
// console.log('&&&&&&&&&&&&&&&&&&&')
// console.log(list.next().value);
// console.log('$$$$$$$$$$$$$$$$$$$')

//ES6箭头函数
// 首先是ES5中的写法
// function add(a,b=1){
//     // 'use strict'
//     return a+b;
// }
// // 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内
// console.log(add.length);
// var add=(a,b=1) => a+b;
// console.log(add(1));

//对象的函数解构 json
//
// let json = {
//     a:'lj',
//     b:'梁娟'
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);

//数组解构
// let arr = ['lj','梁娟','太极'];
// function fun(a,b,c){
//     console.log(a,b,c)
// }
//
// fun(...arr);
// in的用法
// let obj ={
// //     a:'lj',
// //     b:'梁娟'
// // }
// // console.log('c' in obj);
// let arr=[lj,,,];
// // console.log(arr.length); //3
// console.log(0 in arr);
// 数组遍历 forEach
// let arr = ['lj','梁娟','太极'];
// arr.forEach((val,index)=>console.log(index,val));
// 数组遍历 filter
// let arr = ['lj','梁娟','太极'];
// arr.filter(x => console.log(x));
// 数组遍历 some
// let arr = ['lj','梁娟','太极'];
// arr.some(x => console.log(x));
// 数组遍历 map替换
// let arr = ['lj','梁娟','太极'];
// console.log(arr.map(x=>'web'));
// 数组转换成字符串
// console.log(arr.toString());
// console.log(arr.join('|'));

// 对象
// 对象赋值
// let name = 'jspang';
// let skill = 'web';
// var obj = {name,skill};
// console.log(obj)
// // key值的构建
// let key = "skill"
// var obj ={
//     [key]:'web'
// }
// console.log(obj);
//自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2))

// is()
// let obj1={name:'lj'};
// let obj2={name:'lj'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));
// ===同值相等 is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));
//assign
let a={a:'jspang'};
let b={b:'梁娟'};
let c={c:'web'};
let d=Object.assign(a,b,c);
console.log(d);
