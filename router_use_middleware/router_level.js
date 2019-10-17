const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

let home = new Router()
home.get('/antipro', async (ctx) => {
  let reqUrl = ctx.request.url
  let url = ctx.url
  ctx.body = `
    Home ctx.request.url: ${reqUrl}
    Home ctx.url: ${url}
  `
})
.get('/todo', async (ctx) => {
  ctx.body = 'Home todo'
})

let page = new Router()
page.get('/antipro', async (ctx) => {
  ctx.body = 'Page antipro'
})
.get('/todo', async (ctx) => {
  ctx.body = 'Page todo'
})

// 装载所有子路由
let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware router-level is starting at port 3000')
})
