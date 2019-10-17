const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  ctx.body=`
    <h1>First Koa</h1>
    <h2>路由中间件</h2>
  `
})
.get('/todo', (ctx) => {
  ctx.body='Todo Page'
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware base is starting at port 3000')
})