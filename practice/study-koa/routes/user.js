const userRouter = require('koa-router')({
  prefix: '/user'
})

userRouter.get('/', (ctx, next) => {
  ctx.body = '用户页面'
})

userRouter.get('/:id', (ctx, next) => {
  ctx.body = `用户 ${ctx.params.id}`
})


module.exports = userRouter