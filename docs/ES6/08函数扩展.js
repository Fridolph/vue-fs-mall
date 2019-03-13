// function fn(a = 1, b = 2) {
//   console.log(a, b)
// }
// fn()

// function fn1(...args) {
//   console.log(args)
// }

// fn1(1,2,3,4)

/**
 * 箭头函数
 * 1. 内部this对象指向创建时上下文对象， 普通函数的this指向是在函数执行时绑定的
 * 2. 不能作为构造函数
 * 3. 没有arguments
 * 4. 不能作为生成器函数
 */
(async () => {
  console.log('123');
})()
