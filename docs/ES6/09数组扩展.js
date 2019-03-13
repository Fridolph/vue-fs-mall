import { RSA_X931_PADDING } from 'constants';

let arr = [1,2,3]
let arr1 = [1,2,3]

arr1.forEach((v, k, s) => {
  console.log(v, k, s)
})

function forEach(data, callback, context) {
  for (let i = 0; i < data.length; i++) {
    callback.call(context, data[i], i, data)
  }
}


forEach(arr, (v, k, s) => {
  console.log(v, k, s)
})

// 全选 every

// 多选一  some

// 过滤条件 filter

// 生成新映射 map

// 累加器 reduce
