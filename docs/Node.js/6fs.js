const fs = require('fs')

// fs.rename('./tmp/hello.txt', './tmp/world.txt', err => {
//   if (err) throw err

//   fs.stat('./tmp/world.txt', (err, stats) => {
//     if (err) throw err
//     console.log(`文件属性 ${JSON.stringify(stats)}`);
//   })
// })

;(async () => {
  // 创建文件夹 不会进行递归创建
  // await fs.mkdirSync('./tmp')
  // console.log('创建文件夹 tmp');
})()
;(async () => {
  let data = {
    name: 'fridolph',
    age: 24,
    work: 'FE',
  }
  // await fs.writeFileSync('./tmp/data.json', JSON.stringify(data))
  // console.log('创建文件 data.json');
  // await fs.renameSync('./tmp/world.txt', './tmp/data.json')
})()
;(async () => {
  // let file = await fs.statSync('./tmp/data.json')
  // console.log(`文件属性 ${file}`);
  // console.log(`文件属性 ${JSON.stringify(file)}`);
  // console.log(`是文件吗 ${file.isFile()}`);
  // console.log(`是目录吗 ${file.isDirectory()}`);
  // await fs.unlinkSync('./tmp/data.json')
})()
;(async () => {
  // 不能删除非空文件夹
  // fs.rmdirSync('./test')
  // let dirPath = './test'
  // let files = fs.readdirSync(dirPath)
  // console.log('files: ', files)
  // 删除每一个子文件
  // files.forEach(child => {
  //   fs.unlinkSync(`${dirPath}/${child}`)
  // })
  // 删除当前目录
  // fs.rmdirSync(dirPath)
})()

function rmdir(dirPath) {
  let files = fs.readdirSync(dirPath)
  // 当前file可能是文件也可能是文件夹
  files.forEach(file => {
    let childPath = `${dirPath}/${file}`
    if (fs.statSync(childPath).isDirectory()) {
      // 因为文件夹里可能还会有子文件, 所以也不能直接删除
      // 而是需要调用rmdir方法
      rmdir(childPath)
    } else {
      // 不是文件夹就是文件了，直接调用fs.unlinkSync来删除文件
      fs.unlinkSync(`${dirPath}/${file}`)
    }
  })

  fs.rmdirSync(dirPath)
}

// rmdir('./test2')

;(async () => {
  fs.watch('./tmp', (type, file) => {
    console.log('type: ', type)
    console.log('file: ', file)
  })
})()
