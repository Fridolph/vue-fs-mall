const { app, BrowserWindow, Menu } = require('electron')

/**
 * 事件
 * 属性
 * 方法
 */

// Event.Emitter
app.on('ready', () => {
  console.log('electron app ok')

  let bw = new BrowserWindow({
    width: 900,
    height: 720,
    title: '黑芯浏览器',
    // frame: false,
    transparent: true
  })
  // 类似浏览器中的window ，所有与网页相关的事件和操作都通过它完成
  bw.webContents
  bw.webContents.openDevTools()

  // 加载指定页面到窗口中，推荐相对路径
  // 路径在解析时会被处理，相对路径默认指向应用程序的根目录
  bw.loadFile('./src/layout/index.html')

})
