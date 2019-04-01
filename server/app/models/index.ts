import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'
// ts默认不能把.json文件当作模块去处理，需要写声明文件 （@types/json.d.ts）
import configs = require('../config/config.json')
import { userInfo } from 'os';

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'

let config: IConf = configs
config = config[env]
let db: IDb = {}

// 根据配置文件 config.json 创建数据库实例
let sequelize: Sequelize.Sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

// 通过fs模块自动过去加载模型文件所在的目录下
// 所有的模型文件, 如 user.ts , user-profile.ts
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && file.slice(-3)
  })
  .forEach(file => {
    // 通过上面的过滤，找出所有的模型文件，调用 sequelize['import'] 加载并实例化
    const model = sequelize['import'](path.join(__dirname, file))

    // 实例化每一个模型对象，将之保存到一个db对象下，对象结构如下：
    // db = {
    //   user: new User(),
    //   'user-profile': new UserProfile()
    //   ...
    // }
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

export default db
