function throttle(func, delay) {
  // 上次执行函数的时间
  let lastTime = 0
  return function (...args) {
    // 当前时间
    const now = +new Date()
    // 如果距离上次执行函数的时间已经超过指定的时间间隔
    if (now - lastTime > delay) {
      // 重新设置上次执行函数的时间
      lastTime = now
      // 执行函数
      func.apply(this, args)
    }
  }
}
