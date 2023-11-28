/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = new Map()
  // 2.排序数组
  nums.sort((a, b) => a - b)
  // 3.条件存储-这一步是核心，看懂这一步就没问题了
  for (const num of nums) {
    map.set(num, map.get(num - 1) + 1 || 1)
  }
  let ans = 0
  // 4.取最大值
  for (const [index, value] of map) {
    ans = Math.max(ans, value)
  }
  // 5.返回
  return ans
}
