// 无返回值，调用callback
Array.prototype.myForEach = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
