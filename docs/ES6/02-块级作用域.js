/**
 * 作用域 - 变量的作用范围
 *
 * 全局 - 非函数
 * 函数 - 函数包含
 * 块作用域 - 对 {} 包含的范围
 */
{
  var a = 1
  let b = 2
  const c = 3
}

console.log(a) // 1
console.log(b) // not defined
console.log(c) // not defined

/**
 * let
 * 不支持变量声明预解析 (先声明后使用)
 * 支持块级作用域
 * 不允许重复声明（暂存死区）
 *
 * const
 * 不支持声明预解析（先声明后使用）
 * 支持块级作用域
 * 不允许重复声明（暂存死区）
 * 常量 - 值一旦确定就不允许修改，必须初始化
 */
