function myInstanceOf(obj, constructor) {
  // 如果 obj 为 null 或者 undefined，直接返回 false
  if (obj === null || obj === undefined) {
    return false
  }
  // 获取 obj 的原型对象
  let proto = Object.getPrototypeOf(obj)
  // 循环判断 proto 是否等于 constructor.prototype
  while (proto !== null) {
    if (proto === constructor.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}
