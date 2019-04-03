import * as Koa from 'koa'
import { useControllers } from "koa-controllers"
import * as KoaBodyParser from 'koa-bodyparser'
import db from './models'

let app = new Koa()

app.use( async (ctx: Koa.Context, next) => {
  // 把db对象等其他一些数据挂在到当前的state下面
  ctx.state.db = db

  await next()
})

app.use(KoaBodyParser())

useControllers(app, __dirname + '/controllers/**/*.js', {
  multipart: {
    dest: './uploads'
  }
})

app.listen(3002)
console.log('server is running at port 3002...')
