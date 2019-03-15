const fs = require('fs')
const qs = require('querystring')
const url = require('url')
const http = require('http')
const stream = require('stream')

const server = http.createServer((req, res) => {
  /**
   * req: IncomingMessage 类的实例对象，保存和提供了当前请求的客户端信息
   * res: ServerResponse 类的实例对象，保存和提供了响应的相关方法
   */
  // console.log('version: ', req.httpVersion, '\n------------------')
  // console.log('method', req.method, '\n------------------')
  // console.log('headers', req.headers, '\n------------------')
  // console.log('url', req.url, '\n------------------')

  /**
   * 设置并写入头信息
   * res.writeHead(状态码，状态码描述，头信息)
   *
   * 设置头信息
   * res.setHeader(状态码，状态码描述，头信息)
   *
   * 注： 头信息的写入与设置必须在res的write和end之前
   */
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  })

  // 根据不同的url返给客户端不同的资源(数据)
  switch (req.url) {
    case '/':
      res.end('首页')
    case '/list':
      res.end('列表')
    case '/detail':
      res.end('详情')
    default:
      res.writeHead(404, {
        'Content-Type': 'text/html;charset=utf-8'
      })
      res.end('404')
  }

  res.end('hello world', '\n------------------')
})

server.listen(3000, () => {
  console.log('server is running at port 3000.')
})
