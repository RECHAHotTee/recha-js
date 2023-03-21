function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    // 创建一个 Image 对象
    const image = new Image()
    // 当图片加载成功时，调用 resolve 函数，将 Image 对象传递给它
    image.onload = function () {
      resolve(image)
    }
    // 当图片加载失败时，调用 reject 函数，将一个包含错误消息的 Error 对象传递给它
    image.onerror = function () {
      reject(new Error('Could not load image at ' + url))
    }
    // 设置图片的 URL，开始加载图片
    image.src = url
  })
}
