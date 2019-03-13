// JS可以通过定义构造方法来生成新对象，这是一种基于原型的面向对象系统
/**
 * 1. 构造函数的prototype属性，在ES6的类上面继续存在，且类的所有方法都定义在类的prototype属性上
 * 2. 定义在类中的方法都是不可枚举的
 * 3. constructor方法是类的默认方法，通过new命令生成对象实例，自动调用该方法。一个类必须有constructor方法，如果没有显示定义，一个空的constructor方法会被默认添加
 * 4. 生成类的实例对象写法，也是用new 和es5一样
 *
 */
class Person {
  constructor() {
  }

  print() {

  }
}

class Archer extends Person {
  constructor() {
    super()
  }
}
