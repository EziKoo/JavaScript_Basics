/* 第一种： 发生类型转换的地方 */

// 1、字符串拼接
const result1 = 10 + 1        // 11
// 当一个数字和一个字符串相加的时候，会变成字符串拼接，会先把10变成字符串
const result2 = 10 + '1'      // 101
const result2_1 = 10 + parseInt('1')      // 11
// 像上面一样，也会先把布尔值转换成字符串，所以变成true1
const result3 = true + '1'    // true1
console.log(result1);
console.log(result2);
console.log(result3);

/* 第二种： == */
// 两个== 会尝试把数字10转换成字符串，再比较
console.log(10 == '10');          // true
// 因为是两个 ==，0 会转换为false，''空字符串也是false
console.log(0 == '');             // true
// 0 为false
console.log(0 == false);          // true
// '' 为false
console.log('' == false);         // true
// null == undefined 是相等的
console.log(null == undefined);   // true

const obj = { a: 10}
// 这里我们为什么要写两个==呢，因为obj.b即可能是null 也可能是 undefined，
// 就不需要写成 (obj.b === null | obj.b === undefined)
// 简写成(obj.b == null)
// 其他地方我们一般都写 ===，这样子就不会出现一些意料之外的情况
if(obj.b == null){
  console.log('存在');
}

/* 第三种：if语句的情况 */
/* Truthy，和  Falsy */
/* 其实我们在if条件判断中，判断的是 Truthy值还是 Falsy值 */
if("0"){
  console.log('进去了没有？');  // 打印了
}
if(""){
  console.log('进去了没有？');  // 没打印
}

console.log(10 && 1);       // 1
console.log('abc' || 0);    // abc
console.log(0 || 'abc');    // abc
console.log(window.hi);     // undefined
console.log(!window.hi);    // true
console.log(!!window.hi);   // false

console.log('------------------------------');

console.log(1 == true);     // true
console.log('1' == true);   // true
console.log(3 == true);     // false

/* 
  Falsy值有：
  false
  0
  -0
  On
  "",'',``
  null
  undefined
  NaN
*/

/* 其他情况就是Truthy值 */