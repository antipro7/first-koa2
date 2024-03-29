// get_sql_content_map.js 获取sql脚本文件内容
const fs = require('fs')
const getSqlMap = require('./get_sql_map')

let sqlContentMap = {}

/**
 * 读取sql文件内容
 * @param  {string} fileName 文件名称
 * @param  {string} path     文件所在的路径
 * @return {string}          脚本文件内容
 */
function getSqlContent(fileName, path) {
  let content = fs.readFileSync(path, 'utf8')
  sqlContentMap[fileName] = content
}

/**
 * 封装所有sql文件脚本内容
 * @return {object} 
 */
function getSqlContentMap() {
  let sqlMap = getSqlMap()
  for(let key in sqlMap) {
    getSqlContent(key, sqlMap[key])
  }

  return sqlContentMap
}

module.exports = getSqlContentMap