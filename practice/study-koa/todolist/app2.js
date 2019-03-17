const Koa = require('koa')
const KoaStatic = require('koa-static-cache')
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')

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
let datas = JSON.parse(fs.readFileSync('./data.json'))
console.log('datas: ', datas)

app.use(bodyParser())
const router = new KoaRouter()
router.get('/', async ctx => {
  ctx.body = 'hello koa2'
})
router.get('/todos', async ctx => {
  ctx.body = {
    code: 0,
    data: datas.todos
  }
})
router.post('/add', async ctx => {
  let {title} = ctx.request.body
  datas.todos.push({
    id: ++datas._id,
    done: false,
    title
  })
  ctx.body = {code: 0, data: datas.todos}
  fs.writeFileSync('./data.json', JSON.stringify(datas))
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
  ctx.body = {code: 0, data: datas.todos}
  fs.writeFileSync('./data.json', JSON.stringify(datas))
})
router.get('/remove/:id', async ctx => {
  let {id} = ctx.params
  datas.todos = datas.todos.filter(item => item.id != id)
  ctx.body = {code: 0, data: datas.todos}
  fs.writeFileSync('./data.json', JSON.stringify(datas))
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
