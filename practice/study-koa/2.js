const Koa = require('koa')
const path = require('path')
// const router = require('./routes/index')
const koaRouter = require('koa-router')
const KoaStatic = require('koa-static')
// 模版引擎
const Swig = require('koa-swig')
const co = require('co')

const app = new Koa()

// 请求通过KoaStatic处理
app.use(KoaStatic(
  path.join(__dirname, './static')
))

// 设置 router
const router = koaRouter()

// 模版引擎
const render = Swig({
  root: __dirname + '/views',
  autoscape: true,
  cache: false,
  ext: '.html'
})
app.context.render = co.wrap(render)

router.get('/', async (ctx, next) => {
  const names = ['fys', 'yk', 'lsx', 'xxj']
  const users = [{name: 'fri', age: 24, id: '0001'},{name: 'yk', age: 23, id: '0002'}]
  ctx.body = await ctx.render('list.html', {
    names,
    users
  })
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
