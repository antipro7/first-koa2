const Koa = require ('koa')
const app = new Koa()

app.use(async (ctx) => {
  // 当GET请求时，返回表单页面
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>username</p>
        <input name="username" type="text"/><br/>
        <p>nickname</p>
        <input name="nickname" type="text"/><br/>
        <p>email</p>
        <input name="email" type="text"/><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当POST请求的时候，解析POST表单里的数据，并显示出来
    let postData = await parsePostData(ctx)
    ctx.body = postData
  } else {
     // 其他请求显示404
     ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

// 解析上下文里node原生请求的POST参数
function parsePostData (ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = ''
      ctx.req.addListener('data', data => {
        postData += data
      })
      ctx.req.addListener('end', () => {
        let parseData = parseQueryStr(postData)
        resolve(parseData)
      })
    } catch (err) {
      reject(err)
    }
  })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr (queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log(queryStrList)
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=')
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}

app.listen(3000)
console.log('[demo] post is starting at port 3000')