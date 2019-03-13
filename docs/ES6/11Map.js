// 用来存储不重复key的hash结构。不同于集合Set，字典使用的是[键，值]的形式来存储数据
// Object只能用字符串当键，Map可以用对象当作键

const map = new Map([
  ['a', 1],
  ['b', 2]
])
// console.log('map: ', map);

map.set('fri', 27).set('yk', 24)
// console.log('map: ', map)

let obj = {
  'fridolph': 'github.com'
}
map.set(obj, { blog: 'www.xxx.com' })
// console.log('map: ', map)

console.log('map[obj]: ', map.get(obj));
