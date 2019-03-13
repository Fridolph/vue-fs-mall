/**
 * usage: node miaov app -i
 * miaov: 脚本文件
 * app 要生成的项目名称
 * -i 参数 表示要同时生产 index.html文件
 */
const fs = require('fs')
const path = require('path')

const template = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>App</title>
</head>
<body>
  <h1>App</h1>
</body>
</html>`

;(async () => {
  // 获取用户要生成的项目名称
  let appName = process.argv[2]
  // console.log(process.argv)

  // 根据项目名称生成指定的目录
  let appRootPath = path.join(__dirname, appName)
  if (fs.existsSync(appRootPath)) {
    console.log('项目已存在，请勿重复创建')
    process.exit()
  }

  fs.mkdirSync(appRootPath)
  fs.mkdirSync(appRootPath + '/images')
  fs.mkdirSync(appRootPath + '/css')
  fs.mkdirSync(appRootPath + '/js')
  // 判断是否存在 -i 选项
  if (process.argv.includes('-i')) {
    fs.writeFileSync(appRootPath + '/index.html', template)
  }
  console.log('项目创建成功')
})()
