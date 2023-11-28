Function.prototype.apply2 = function (context, args) {
  context = context === undefined || context === null ? window : context
  context.__fn = this
  let result = context.__fn(...args)
  delete context.__fn
  return result
}
