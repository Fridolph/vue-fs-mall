// 很多时候，类型是写死的，这样不利于复用
// 这样，我们就需要给类型 也设置变量
// <类型变量名> 一般系统使用单字母大写，比如 T，E。。。
// 写在函数名，参数列表之间，这是函数的
// function fn<T>(x: T): number {
//   return Number(x) * 10
// }

// fn<number>('1')

// 泛型变量
function fn1(arg: string): string {return arg}
function fn2<T>(arg: T): T {return arg}
function fn3<T, S>(arg1: T, arg2: S): [T, S] {return [arg1, arg2]}

// 数组形式
function a1<T>(arg: T[]): T[] {return []}
function a2<T>(arg: Array<T>): Array<T> {return []}

// 类类型
function getArray(Ctor: {new()}) {
  return new Ctor()
}
// 这里表示 a 是一个Person类型的对象
// let a: Person

class Test {}
// {} 这里表示 fn 是一个 返回Person对象 的构造函数
// let fn: {new (): Test} = function() {
//   return new Test ()
// }
