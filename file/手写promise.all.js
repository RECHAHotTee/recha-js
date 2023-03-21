function myPromiseAll(promises) {
  // 返回一个新的 Promise 对象
  return new Promise((resolve, reject) => {
    // 如果传入的参数不是一个数组，直接返回一个 rejected 的 Promise 对象
    if (!Array.isArray(promises)) {
      reject(new TypeError('传入的参数必须是一个数组'))
    }
    // 如果传入的数组是空数组，则直接返回一个 resolved 的 Promise 对象
    if (promises.length === 0) {
      resolve([])
    }
    // 定义一个数组来保存所有 Promise 的结果
    let results = []
    // 定义一个计数器，用于记录所有 Promise 的完成状态
    let count = 0
    // 遍历传入的 Promise 数组
    promises.forEach((promise, index) => {
      // 对每个 Promise 进行异步调用
      Promise.resolve(promise)
        .then((result) => {
          // 如果 Promise 成功完成，将结果保存到结果数组中
          results[index] = result
          // 每当有一个 Promise 完成时，计数器加 1
          count++
          // 如果计数器等于传入的 Promise 数组长度，说明所有 Promise 都已经完成
          if (count === promises.length) {
            // 将所有 Promise 的结果作为一个数组，传递给新的 Promise 对象的 resolve 方法
            resolve(results)
          }
        })
        .catch((error) => {
          // 如果有一个 Promise 失败，直接将错误信息传递给新的 Promise 对象的 reject 方法
          reject(error)
        })
    })
  })
}
