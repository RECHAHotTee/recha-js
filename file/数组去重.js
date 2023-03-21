const uniqueArr1 = Array.from(new Set(arr))

const uniqueArr2 = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}
