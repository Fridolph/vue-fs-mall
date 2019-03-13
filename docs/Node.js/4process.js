const fs = require('fs')

// argv 用来获取当前运行node程序的相关参数
// console.log(process.argv)
// if (process.argv.includes('-v')) {
//   console.log('v1.0.0')
// }

/**
 * 标准输入流
 */
// process.stdin
// 事件: 'data'
process.stdout.write('请输入你要创建的项目名称: ')

/**
 * 标准输出流
 */
// process.stdout
// .write(data[, encoding][,callback])


process.stdin.on('data', e => {
  fs.mkdirSync(e.toString().replace('\r\n', ''))
  process.stdout.write('项目创建成功')
})
