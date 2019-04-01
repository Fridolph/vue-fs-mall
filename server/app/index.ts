import * as Koa from 'koa'
import { useControllers } from 'koa-controllers'
// 模块
import db from './models'
console.log('db: ', db)

let app = new Koa()

useControllers(app, __dirname + '/controllers/**/*.js', {
  multipart: {
    dest: './uploads'
  }
})

app.listen(4000)
