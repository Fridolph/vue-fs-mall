## GUI

图形用户界面（GUI graphical user interface）是指采用图形方式显示的计算机操作用户界面

与CLI相比，图形界面对于普通用户在视觉和操作上更加容易接受

---

## Electron

### 主进程与渲染进程

在Electron中，被Electron直接运行的脚本(package.json中指定的main脚本)被称为主进程。

在Electron中用来展示界面的web页面都运行在一个独立的，属于它自己的渲染进程中，我们可以通过主进程来创建web页面，但一个web页面被销毁时，对应的渲染进程也会被终止。

主进程管理的所有web页面和他们对应的渲染进程。一个应用程序有且仅有一个主进程。

在Electron中，Electron同时为主进程与渲染进程暴露了Node.js的所有接口，也就是说，我们可以在Electron的主进程与渲染进程中使用Node.js的API。

### app对象

该对象提供了一系列事件用来控制整个程序的生命周期，从打开到关闭。
`ready window-all-closed quit ...`

同时也提供了一些方法来管理应用程序的状态和行为 ` quit() relaunch() hide() show() ...`
