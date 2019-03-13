const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: '请输入项目名',
    // default: 'my-app',
    validate(val) {
      // 对用户输入数据 或 选择数据进行验证
      if (val.trim() === '') {
        return '应用名称不能为空'
      }
      return true
    },
    // 对用户输入数据或选择数据进行过滤
    filter(val) {
      return val.toLocaleLowerCase()
    }
  },
  {
    type: 'confirm',
    name: 'useES6',
    message: '是否启用ES6支持',
    default: true
  },
  {
    type: 'list',
    name: 'framework',
    message: '请选择框架',
    choices: ['Vue', 'React', 'Angular'],
    default: 1
  },
  {
    type: 'checkbox',
    name: 'lib',
    message: '依赖库',
    choices: [
      {
        name: 'vue',
        value: 'vue',
        checked: true
      },
      {
        name: 'vue-router',
        value: 'vue-router'
      },
      {
        name: 'vuex',
        value: 'vuex'
      },
      {
        name: 'axios',
        value: 'axios',
      }
    ]
  }
]).then(answers => {
  console.log(answers)
})
