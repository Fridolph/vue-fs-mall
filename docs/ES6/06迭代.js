// [Symbol.iterator]
let obj = {
  a: 1,
  name: 'fri',
  say() {
    console.log('hi')
  }
}

for (let k of Object.keys(obj)) {
  // console.log(k)
}

for (let key in obj) {
  console.log(key)
}
