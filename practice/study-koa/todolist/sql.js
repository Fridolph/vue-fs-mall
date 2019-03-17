;(async () => {
  const fs = require('fs')
  const Koa = require('koa')
  const KoaRouter = require('koa-router')
  const KoaStatic = require('koa-static-cache')
  const bodyParser = require('koa-bodyparser')
  const mysql = require('mysql2/promise')
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'miaov'
  })
  // --------------------------------------------

  const app = new Koa()
  app.use(bodyParser())

  app.use(KoaStatic('./public', {
    prefix: '/',
    cache: false,
    gzip: true
  }))

  const router = new KoaRouter()
  router.get('/', async ctx => {
    ctx.body = fs.readFileSync('./public/sql.html').toString()
  })
  router.get('/todos', async ctx => {
    let {page, limit} = ctx.request.query
    let sql = `SELECT _id,title,done FROM todos`
    const [all] = await connection.query(sql)
    const total = all.length
    const maxPage = Math.ceil(total / limit)
    let sqlTodos = `SELECT _id,title,done FROM todos ORDER BY _id DESC LIMIT ${+limit} OFFSET ${(+page - 1) * 5}`
    const [todos] = await connection.query(sqlTodos)
    // const [todos] = await connection.query(`SELECT _id,title,done FROM todos LIMIT 5 ORDER BY done DESC, _id DESC`)
    // console.log('get data from mysql', todos.length)
    ctx.body = {
      code: 0,
      data: {
        todos,
        total
      }
    }
  })
  router.post('/add', async ctx => {
    let {title} = ctx.request.body
    // console.log('title: ', title);
    if (title) {
      const [rs] = await connection.query(`INSERT INTO todos (title, done) VALUES ("${title}", ${Number(0)})`)
      if (rs.affectedRows > 0) {
        ctx.body = {
          code: 0,
          msg: '添加成功'
        }
      } else {
        ctx.body = {
          code: 1,
          msg: '添加失败'
        }
      }
    }
  })

  app.use(router.routes())

  app.listen(3000, () => {
    console.log('server is running at port 3000...')
  })
})()
