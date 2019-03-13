const {app, BrowserWindow, ipcMain} = require('electron')

// 主线程
// let username = 'fridolph'
// global.username = username

let i = 0

app.on('ready', () => {
  const bw = new BrowserWindow({
    width: 1000,
    height: 600
  })

  bw.webContents.openDevTools()
  bw.loadFile('./src/layout/index.html')

  // 监听渲染进程 ipcRenderer 发送的消息
  ipcMain.on('getData', (e, key) => {
    // console.log(data)
    // e.sender => 通过这个对象，返回消息给渲染进程
    e.sender.send('sendData', i++)
  })

  // 主进程主动发送消息 到渲染进程
  setTimeout(() => {
    bw.webContents.send('hello', 'Hello Mr.fridolph')
  }, 2000);


  const bw2 = new BrowserWindow()
  bw2.webContents.openDevTools()
  bw2.loadFile('./src/layout/index2.html')
})
