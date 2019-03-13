const { app, BrowserWindow, Menu, MenuItem } = require('electron')

/**
 * 事件
 * 属性
 * 方法
 */

// Event.Emitter
app.on('ready', () => {
  console.log('electron app ok')

  let bw = new BrowserWindow({
    // ...
  })
  // 类似浏览器中的window ，所有与网页相关的事件和操作都通过它完成
  // bw.webContents
  // bw.webContents.openDevTools()

  // 加载指定页面到窗口中，推荐相对路径
  // 路径在解析时会被处理，相对路径默认指向应用程序的根目录
  bw.loadFile('./src/layout/index.html')

  // 创建菜单对象
  let menu = new Menu()
  // 创建菜单项
  let menuItem1 = new MenuItem({
    type: 'submenu',
    label: '菜单',
    submenu: [
      {
        label: '退出',
        role: 'quit',
      }
    ]
  })
  // 把菜单项添加到指定的菜单对象中
  menu.append(menuItem1)
  // 再指定该菜单显示的主体（具体哪个窗口、右键-上下文）
  // 菜单位置：
  // 1. 应用程序的顶层菜单
  // 2. 上下文菜单 (右键)

  // 把菜单添加到应用程序窗口最顶层

  // ----------------------------

  let menuItem2 = new MenuItem({
    type: 'submenu',
    label: '查看',
    submenu: [
      {
        type: 'normal',
        label: '文件'
      },
      {
        type: 'normal',
        label: '文件夹'
      },
      {
        type: 'normal',
        label: '自定义退出',
        click() {
          app.quit()
        }
      }
    ]
  })
  menu.append(menuItem2)
  Menu.setApplicationMenu(menu)
})
