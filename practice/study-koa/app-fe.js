const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static-cache')
const Swig = require('koa-swig')
const co = require('co')

const app = new Koa()


// 当前数据是存储在服务器运行的内存中的
let datas = {
  metaTitle: 'Home - TodoList',
  title: 'TodoList',
  tasks: [
    {
      id: 1,
      title: '学习koa',
      done: true,
    },
    {
      id: 2,
      title: '学习数据库',
      done: false,
    },
    {
      id: 1,
      title: '学习TypeScript',
      done: false,
    }
  ]
}

// 设置静态目录
app.use(KoaStatic('./static', {
  prefix: '/static',
  gzip: true,
  // 把解析后的结果保存在内存中，避免每次访问都解析模版， 使用线上配置
  // cache: 'memory',
  cache: false,
  // 用于解析字符串编码 - 安全 防止XSS
  autoscape: true,
}))

// 设置模版引擎
app.context.render = co.wrap(
  Swig({
    root: __dirname + '/views',
    cache: false,
    ext: 'html',
    autoscape: true,
  })
)

// 路由
const router = new KoaRouter()
// 首页，用于展示任务清单
router.get('/', async ctx => {
  await ctx.render('index.html', datas)
})
// 添加，添加新的任务
router.get('/add', async ctx => {
  const {metaTitle, title} = datas
  await ctx.render('add.html', {
    metaTitle,
    title
  })
})
// 改变，修改任务状态
router.get('/change/:id', ctx => {
  ctx.body = `/change/${ctx.params.id}`
})
// 删除任务
router.get('/remove/:id', ctx => {
  ctx.body = `/remove/${ctx.params.id}`
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
