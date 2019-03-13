// 允许按照一定模式，从数组和对象中提取值，并对变量进行赋值，这被称为解构赋值
let arr = [1,2,3]

// let [a, b, c] = arr
// console.log(a,b,c)

let obj = {
  name: 'fri',
  age: 24
}

let {name, age} = obj
// console.log(name, age)
let {name: newName, age: newAge} = obj
// console.log(newName, newAge)

// 多重解构
let {foo: [a, b]} = {foo: [10, 20], bar: 'bbb'}
console.log(a, b)

let [aa] = 'miaov'
console.log('aa: ', aa);

let {left: L, width: W, height: H} = getComputedStyle(document.body)
