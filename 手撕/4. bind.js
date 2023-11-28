Function.prototype.bind2 = function (context, ...args1) {
  context = context === undefined || context === null ? window : context
  let _this = this
  return function (...args2) {
    context.__fn = _this
    let result = context.__fn(...[...args1, ...args2])
    delete context.__fn
    return result
  }
}
