function debounce(func, delay) {
  // 初始化一个定时器变量，用于记录延迟时间的计时器
  let timer = null
  // 返回一个新的函数，每次调用返回的新函数时，它会清除之前的定时器并设置一个新的定时器
  return function (...args) {
    // 清除之前的计时器，以免之前的定时器触发调用原始函数
    clearTimeout(timer)
    // 设置一个新的计时器，并在计时结束后调用原始函数
    timer = setTimeout(() => {
      // 调用原始函数，并传入之前调用新函数时的参数
      func.apply(this, args)
    }, delay) // 设置延迟时间，当延迟时间过去后，计时器触发并调用原始函数
  }
}
