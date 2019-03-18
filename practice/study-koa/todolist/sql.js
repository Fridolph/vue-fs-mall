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
    database: 'miaov',
  })
  // --------------------------------------------

  const app = new Koa()
  app.use(bodyParser())

  app.use(
    KoaStatic('./public', {
      prefix: '/',
      cache: false,
      gzip: true,
    })
  )

  const router = new KoaRouter()
  router.get('/', async ctx => {
    ctx.body = fs.readFileSync('./public/sql.html').toString()
  })
  router.get('/todos', async ctx => {
    let { page, limit, type } = ctx.request.query
    let sql = `SELECT _id,title,done FROM todos`
    const [all] = await connection.query(sql)
    const total = all.length
    // console.log('total: ', total);
    const maxPage = Math.ceil(total / limit)
    let where = ''
    if (type == 'completed') {
      where = `WHERE done=1`
    } else if (type == 'todo') {
      where = `WHERE done=0`
    }
    let sqlTodos = `SELECT _id,title,done FROM todos ${where} ORDER BY _id ASC LIMIT ${+limit} OFFSET ${(+page -
      1) *
      5}`
    // console.log('sqlTodos', sqlTodos)

    const [todos] = await connection.query(sqlTodos)
    // console.log('todos: ', todos)

    // ------------------------------------------
    // where ??=?
    // - ?? 表示字段或表名  ? 表示值
    // let sqlTodo = `SELECT id,title,done FROM ${where} LIMIT ? OFFSET ?`
    // const [todos] = await connection.query(sqlTodo, [+limit, 5])
    ctx.body = {
      code: 0,
      data: {
        todos,
        total
      },
    }
  })
  router.post('/add', async ctx => {
    let { title } = ctx.request.body
    // console.log('title: ', title);
    if (title) {
      const [rs] = await connection.query(
        `INSERT INTO todos (title, done) VALUES ("${title}", ${Number(0)})`
      )
      if (rs.affectedRows > 0) {
        ctx.body = { code: 0, msg: '添加成功' }
      } else {
        ctx.body = { code: 1, msg: '添加失败' }
      }
    }
  })
  router.post('/toggle/:id', async ctx => {
    let { id } = ctx.params
    let { done } = ctx.request.body
    // const [rs] = await connection.query(`UPDATE todos SET done=${done} WHERE _id='${id}'`)
    let sql = `UPDATE todos SET ??=? WHERE ??=?`
    const [rs] = await connection.query(sql, ['done', done, '_id', id])
    if (rs) {
      ctx.body = { code: 0, msg: '修改成功' }
    } else {
      ctx.body = { code: 1, msg: '修改失败' }
    }
  })
  router.post('/remove/:id', async ctx => {
    let { id } = ctx.params
    let sql = `DELETE FROM todos WHERE ??=?`
    const [rs] = await connection.query(sql, ['_id', id])
    if (rs) {
      ctx.body = { code: 0, msg: '删除成功' }
    } else {
      ctx.body = { code: 1, msg: '删除失败' }
    }
  })

  app.use(router.routes())

  app.listen(3000, () => {
    console.log('server is running at port 3000...')
  })
})()
