const arr = [1, 2, 3]
Array.prototype.map2 = function (callback) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }
  return res
}
const res = arr.map2((ele, index, arr) => {
  return ele * 2
})
console.log(res)
