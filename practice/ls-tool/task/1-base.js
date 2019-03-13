/**
 * ls-tools
 * 输出当前运行命令所在目录下的文件和文件夹
 */
const fs = require('fs')
const commander = require('commander')

// 设置当前命令工具的版本
commander.version('v1.0.0', '-v, --version')

// 如果默认不带 子命令，直接走 action逻辑
// 如果写了子命令，必须要带上子命令才能触发 action逻辑
const subCommander = commander.command('show <path>')
subCommander.option('-n, --name', '设置名字')

// 实现命令的具体逻辑
commander.action((path) => {
  console.log('ls', path)
  // 把当前命令指定目录下的文件以及文件夹全部显示在控制台中
  try {
    // const files = fs.readdirSync(path)
    // console.log('files: \n', files)
  } catch (e) {
    // 开发过程中，可以把错误打印出来, 实际发布以后应该屏蔽错误信息
    console.error(e)
  }
})

// 在process.argv交给parse解析之前，进行一个简单处理
// 少于3个参数，表示使用的是默认值
if (process.argv.length < 3) {
  process.argv.push(__dirname)
  // console.log(process.argv)
}
// node index
commander.parse(process.argv)
