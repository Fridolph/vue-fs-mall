// Loop Alive -> Timer -> IO cycle

// IO cycle (pending I/O callbacks) Idle, prepare, Poll

// check -> close Callbacks -> Loop Alive ? Loop Alive -> Timer : Exit callbacks

// -----------------------------------


// 宏任务 task (script、setTimeout、setInterval、setImmediate)

// 微任务 jobs (Promise、process.nextTick)

console.log('script start');

setTimeout(() => {
  console.log('setTimeout1');
}, 0)

new Promise(resolve => {
  console.log('promise start')
  setTimeout(() => {
    console.log('setTimeout2');
    resolve()
  }, 1000)
}).then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
})

console.log('script end');
// script start
// promise start
// script end
// setTimeout1
// setTimeout2
// promise1
// promise2
