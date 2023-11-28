function fn(nums, target) {
  const map = new Map()
  nums.forEach((item, index) => {
    if (map.has(target - item)) {
      return [map.get(target), index]
    } else {
      map.set(item, index)
    }
  })
  return null
}
