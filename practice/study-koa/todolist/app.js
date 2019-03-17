const Koa = require('koa')
const KoaStatic = require('koa-static-cache')
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')

// 通过请求 拿到一个基础页面, 后续的内容就不再通过浏览器发请求获取
// 因为通过浏览器发请求会导致浏览器重新绘制、跳转或新开窗口

// 1. 通过浏览器拿到一个页面
// 2. 基础页面写js，通过Ajax发送请求（Ajax不会刷新页面）


const app = new Koa()

// 静态
app.use(KoaStatic('./public', {
  prefix: '/',
  gzip: true,
  cache: false,
}))

// ------------------------------
let id = 2
let todos = [
  {
    id: 1,
    title: 'learn koa2',
    done: true
  },
  {
    id: 2,
    title: 'learn vue',
    done: true,
  }
]
app.use(bodyParser())
const router = new KoaRouter()
router.get('/', async ctx => {
  ctx.body = 'hello koa2'
})
router.get('/todos', async ctx => {
  // ctx.body = datas.todos
  ctx.body = {
    code: 0,
    data: todos
  }
})
router.post('/add', async ctx => {
  let {title} = ctx.request.body
  todos.push({
    id: ++id,
    done: false,
    title
  })
  ctx.body = {code: 0, data: todos}
})
router.get('/toggle/:id', async ctx => {
  let {id} = ctx.params
  console.log('收到的todo id为: ', id)
  // console.log('改变前数据', todos)
  todos.forEach(item => {
    if (item.id == id) {
      // console.log('item: ', item)
      item.done = !item.done
    }
  })
  // console.log('改变后数据', todos)
  ctx.body = {code: 0, data: todos}
})
router.get('/remove/:id', async ctx => {
  let {id} = ctx.params
  todos = todos.filter(item => item.id != id)
  ctx.body = {code: 0, data: todos}
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
