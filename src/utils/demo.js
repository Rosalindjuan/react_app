export const lengthOfLongestSubstring = (str) => {
  let obj = {}
  let l = 0
  let arr = str.split('')
  return arr.reduce((prev, cur, index, array) => {
    l = obj[cur] >= l ? obj[cur] + 1 : l
    obj[cur] = index
    return Math.max(prev, index-l+1)
  }, 0)
}