# Koa 

- Request  处理请求并包装对象

- middleware  通过use方法注册中间间

- response  把经过中间件处理的数据进行输出

---


## context 对象

- context
  - req Node的request对象
  - res Node的response对象
  - request Koa封装的request对象
  - response Koa封装的response对象
  - state 用户数据存储空间
  - app 当前应用程序实例，Application对象

- request 对象
  - .header 头信息对象
  - .header= 设置头信息 很多都可以设置，下面省略
  - .method 请求方法
  - .length 请求正文内容长度
  - .url 请求url
  - .href 完整url 包含协议、主机、请求串
  - .path url路径部分
  - .querystring URL中的querystring
  - .search url中带?的querystring
  - .get(field) 获取请求头的通用方法
  - ... 省略
- response 对象
  - .body 响应内容
  - .body= 设置响应内容(如果status没设置，koa会默认设为200或204，同时自己判断返回MIME类型)
  - .redirect(url) 重定向 默认码为302 临时，可通过status设置
  - `.attachment([fieldname])`: 设置下载文件头 fieldname为下载文件名称

## 常用中间件

- koa-static-cache 静态文件代理服务
- koa-router 路由
- koa-swig 模版引擎
- koa-bodyparser body解析
- koa-multer formData解析