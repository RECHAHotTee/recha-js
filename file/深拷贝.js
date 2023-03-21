// 该函数创建一个对象的深拷贝，递归地复制其所有属性和值
function deepClone(obj) {
  // 如果传入的参数为 null 或者不是对象，直接返回该参数
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  let result
  // 如果传入的参数为数组，则创建一个新数组，并递归地拷贝每个元素
  if (obj instanceof Array) {
    result = []
    for (let i = 0; i < obj.length; i++) {
      result.push(deepClone(obj[i]))
    }
  } else {
    // 如果传入的参数为普通对象，则创建一个新对象，并递归地拷贝每个属性
    result = {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepClone(obj[key])
      }
    }
  }
  // 返回深拷贝后的结果
  return result
}
