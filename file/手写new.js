function myNew(constructor, ...args) {
  // 创建一个新对象
  const obj = {}
  // 将新对象的原型链接到构造函数的原型对象上
  obj.__proto__ = constructor.prototype
  // 将构造函数的 this 绑定到新对象上，并执行构造函数
  const result = constructor.apply(obj, args)
  // 如果构造函数返回了一个对象，则返回该对象；否则返回创建的新对象
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result
  }
  return obj
}
