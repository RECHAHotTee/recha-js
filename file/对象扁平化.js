/**
 * 对象扁平化
 * 对象扁平化是指将嵌套的对象结构展开成一个扁平的键值对集合。
 * 实现对象扁平化的方法有多种，其中一种比较简单的实现方式是使用递归。
 * 涉及知识点：
 * 1. 引用数据类型
 * 2. 递归
 * 3. 对象的遍历
 */

function flattenObject(obj) {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        let flatObj = flattenObject(obj[key]);
        for (let flatKey in flatObj) {
          if (flatObj.hasOwnProperty(flatKey)) {
            result[key + "." + flatKey] = flatObj[flatKey];
          }
        }
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

const obj = {
  a: {
    b: {
      c: 1,
      d: 2
    },
    e: 3
  },
  f: 4
};

console.log(flattenObject(obj)); // { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, f: 4 }