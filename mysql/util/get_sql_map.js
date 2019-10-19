// get_sql_map.js 获取所有sql脚本文件
const fs = require('fs')
const walkFile = require('./walk_file')

/**
 * 获取sql目录下的文件数据
 * @return {object}
 */
function getSqlMap () {
  let basePath = __dirname
  let pathArr
  let fileList

  basePath = basePath.replace(/\\/g, '\/')
  pathArr = basePath.split('\/')
  pathArr = pathArr.splice(0, pathArr.length - 1)
  basePath = pathArr.join('/') + '/sql/'
  fileList = walkFile(basePath, 'sql')
  return fileList
}

module.exports = getSqlMap