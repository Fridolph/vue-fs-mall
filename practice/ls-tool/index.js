const {app, BrowserWindow, ipcMain} = require('electron')

app.on('ready', () => {
  const bw = new BrowserWindow({
    width: 540,
    height: 720,
    frame: false,
    resizable: false
  })

  // bw.webContents.openDevTools()
  bw.loadFile('./src/layout/index.html')
})
