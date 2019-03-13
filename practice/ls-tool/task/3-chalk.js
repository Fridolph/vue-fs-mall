/**
 * ls-tools
 * 输出当前运行命令所在目录下的文件和文件夹
 */
const fs = require('fs')
const chalk = require('chalk')
const commander = require('commander')

// 设置当前命令工具的版本
commander.version('v1.0.0', '-v, --version')

// 设置命令选项
commander.option('-p, --path [path]', '设置要显示的目录', __dirname)
// 如果选项不接受用户输入值，那么该选项将以boolean形式提供给后续命令使用
commander.option('-l, --list', '以列表的形式显示')

// 实现命令的具体逻辑
commander.action(() => {
  // option中的变量会挂到当前命令commander对象的同名属性下
  let path = commander.path
  let list = commander.list
  // console.log(commander.path)
  // 把当前命令指定目录下的文件以及文件夹全部显示在控制台中
  try {
    const files = fs.readdirSync(path)

    // 如果commander.list 为true，则以列表形式显示(用户传了 -l)
    if (list) {
      // 通过map生成要展示的数据
      let output = files.map(file => {
        let stat = fs.statSync(commander.path + '/' + file)
        let type = stat.isDirectory() ? `${chalk.green('目录')}` : `${chalk.yellow('文件')}`
        return `[${type}] ${file}\r\n`
      }).join('')
      console.log(output)
    } else {
      console.log(chalk.blue('files: \n', files))
    }
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
