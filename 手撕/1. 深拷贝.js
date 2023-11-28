function deepCopy(target, origin) {
  for (let item in origin) {
    let value = origin[item]
    if (typeof value !== 'object') {
      target[item] = value
    } else {
      let obj = new value.constructor()
      target[item] = obj
      deepCopy(target[item], value)
    }
  }
  return target
}

let obj1 = { name: 'zhuxu', age: 24, info: { info: 'info' } }
let obj = deepCopy({}, obj1)
obj1.name = 'zhuxu2'
console.log(obj, obj1)
