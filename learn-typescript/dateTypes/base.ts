// 获取input输入内容
const input: HTMLInputElement = document.querySelector('.ipt')
const btn: HTMLButtonElement = document.querySelector('.btn')

btn.addEventListener('click', e => {
  console.log('value', value)
})
let value: number = Number(input.value) + 10
