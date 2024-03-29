// walk_file.js 遍历所有sql脚本文件
const fs = require('fs')

/**
 * 遍历文件目录
 * @param {string} pathResolve 需进行遍历的目录路径
 * @param {string} mime 遍历文件的后缀名
 * @return {object} 返回遍历后的目录结果
 */
const walkFile = function (pathResolve, mime) {
  let files = fs.readdirSync(pathResolve)
  let fileList = {}
  for (let [i, item] of files.entries()) {
    let itemArr = item.split('\.')
    let itemMime = (itemArr.length > 1) ? itemArr[itemArr.length - 1] : 'undefined'
    if (mime === itemMime) {
      fileList[item] = pathResolve + item
    }
  }

  return fileList
}

module.exports = walkFile