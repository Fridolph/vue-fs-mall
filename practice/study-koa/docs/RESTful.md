路由设置

RESTful 的url设计: 使用http中的method来表述动作

- RESTful风格的url
  - POST http://127.0.0.1/user 新增用户
  - GET http://127.0.0.1/user/1 查询用户
  - DELETE http://127.0.0.1/user/1 删除用户

koa路由方法

- get
- put
- post 
- patch
- delete
- all

实例

    router.get('/', (ctx, next) => {})

通过get方法访问 `'/'`时执行注册函数