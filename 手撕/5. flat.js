const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]
Array.prototype.flat = function (deep = 1) {
  let res = []
  deep--
  for (const p of this) {
    if (Array.isArray(p) && deep >= 0) {
      res = res.concat(p.flat(deep))
    } else {
      res.push(p)
    }
  }
  return res
}
console.log(arr.flat(1))
