// 将数据库中查询的分类信息重新整理保存到新数组中
// 整理前：
// [
//   { sort_name: 'css' },
//   { sort_name: 'issue' },
//   { sort_name: 'javascript' },
//   { sort_name: 'mysql' },
//   { sort_name: 'node' },
//   { sort_name: 'other' },
//   { sort_name: 'vue' }
// ]
// 整理后：
// ['css', 'issue', 'javascript', 'mysql', 'node', 'other', 'vue']

module.exports = function extractSort(array) {
  let newArray = []
  array.forEach(item => {
    newArray.unshift(item.sort_name)
  })
  return newArray

}