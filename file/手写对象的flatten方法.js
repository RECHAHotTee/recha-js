function flatten(obj) {
  const result = {} // 存放扁平化后的对象
  function recurse(cur, prop) {
    if (typeof cur !== 'object') {
      result[prop] = cur // 如果当前项不是对象，则将其加入结果中
    } else if (Array.isArray(cur)) {
      for (let i = 0, l = cur.length; i < l; i++) {
        recurse(cur[i], `${prop}[${i}]`) // 如果当前项是数组，则递归处理其中的每一项
      }
      if (l === 0) {
        result[prop] = [] // 如果当前数组为空，则将其加入结果中
      }
    } else {
      let isEmpty = true
      for (let p in cur) {
        isEmpty = false
        recurse(cur[p], prop ? `${prop}.${p}` : p) // 如果当前项是对象，则递归处理其中的每一个属性
      }
      if (isEmpty && prop) {
        result[prop] = {} // 如果当前对象为空，则将其加入结果中
      }
    }
  }
  recurse(obj, '')
  return result
}
