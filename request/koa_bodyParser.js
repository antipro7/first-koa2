const Koa = require ('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

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
    let postData = ctx.request.body
    ctx.body = postData
  } else {
     // 其他请求显示404
     ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3000)
console.log('[demo] koa_bodyParser is starting at port 3000')