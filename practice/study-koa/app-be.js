const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static-cache')
const Swig = require('koa-swig')
const co = require('co')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

let id = 3
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
      id: 3,
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
// 处理请求正文中的数据
app.use(bodyParser())

// 路由
const router = new KoaRouter()
// 首页，用于展示任务清单
router.get('/', async ctx => {
  // console.log('datas', datas.tasks)
  await ctx.render('index.html', datas)
})
// 添加新的任务 页面
router.get('/add', async ctx => {
  const {metaTitle, title} = datas
  await ctx.render('add.html', {
    metaTitle,
    title
  })
})
// 添加新任务
// router.get('/addTask', async ctx => {
//   let {title} = ctx.query
//   ctx.body = `接收提交的新任务, \n title: ${title}`
// })
router.post('/add', async ctx => {
  let {title} = ctx.request.body
  // ctx.body = `POST接收提交的新任务 \ntitle: ${title}`

  if (!title) {
    ctx.body = await ctx.render('message', {
      metaTitle: 'Home - TodoList',
      title: 'TodoList',
      msg: '请输入任务标题',
      href: 'javascript:history.back()'
    })
  } else {
    datas.tasks.push({
      id: ++id,
      title,
      done: false
    })

    await ctx.redirect('/')
  }
})
// 改变任务状态
router.get('/change/:id', async ctx => {
  let id = ctx.params.id
  // console.log('/change/id: ', id)
  await datas.tasks.forEach(task => {
    if (task.id === id) {
      task.done = !task.done
    }
  })
  ctx.body = `change id -> ${id}`
  ctx.response.redirect('/')
})
// 删除任务
router.get('/remove/:id', async ctx => {
  let id = ctx.params.id
  datas.tasks = datas.tasks.filter(item => item.id !== id)
  // ctx.body = `/remove/${ctx.params.id}`
  await ctx.render('remove.html', {
    id
  })
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
