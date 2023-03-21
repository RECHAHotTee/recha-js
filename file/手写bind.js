Function.prototype.bind = function (context) {
  // 当前函数
  var newFn = this
  // 新的函数参数
  var newArgs = Array.prototype.slice.call(arguments)
  return function () {
    return newFn.apply(context, newArgs)
  }
}
