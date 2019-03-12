// *让外部能看到但不能访问到

const Person = (function() {
  const n = Symbol('n')
  function P(name) {
    this.name = name
    this[n] = 'fridolph'
  }
  return P
})()

let p1 = new Person('fys')
console.log(p1) // P { name: 'fys', [Symbol(n)]: 'fridolph' }
// console.log(p1[Symbol(n)]); undefined
