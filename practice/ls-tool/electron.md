# Electron

## 主进程与渲染进程

在Electron中，被Electron直接运行的脚本(package.json中指定的main脚本)被称为主进程。

在Electron中用来展示界面的web页面都运行在一个独立的，属于它自己的渲染进程中，我们可以通过主进程来创建web页面，但一个web页面被销毁时，对应的渲染进程也会被终止。

主进程管理的所有web页面和他们对应的渲染进程。一个应用程序有且仅有一个主进程。

在Electron中，Electron同时为主进程与渲染进程暴露了Node.js的所有接口，也就是说，我们可以在Electron的主进程与渲染进程中使用Node.js的API。

## app对象

该对象提供了一系列事件用来控制整个程序的生命周期，从打开到关闭。
`ready window-all-closed quit ...`

同时也提供了一些方法来管理应用程序的状态和行为 ` quit() relaunch() hide() show() ...`

## BrowserWindow 对象

每一个 BrowserWindow 对象的实例都是一个独立的渲染进程，同时该对象也提供了各种用于操控的API，包括：事件、属性、方法

### 实例方法

- close
- show
- hide
- maximize
- unmaximize
- setSize
- setPosition
- getPosition
- setTitle
- getTitle
- loadFile 加载页面（这就是我们要显示的内容）页面地址使用相对路径，相对路径相对于应用程序根目录
- loadURL 使用URL协议加载文件，可以是http协议，也可以是file协议

## 数据共享与通信

- 通过浏览器API
  - Storage API
  - IndexedDB

- Electron
  - remote 在渲染进程中使用主进程模块
  - webContents 渲染以及控制web页面
