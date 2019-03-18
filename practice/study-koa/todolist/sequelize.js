;(async () => {
  const Sequelize = require('sequelize')

  // 连接数据库
  // params: tableName, username, passowrd, {options}
  const sequelize = new Sequelize('miaov', 'root', '', {
    // host: '127.0.0.1',
    // port: 3306,
    dialect: 'mysql'
  })
  // 测试连接 - 如果Promise有可能抛出错误，那么一定要 捕获/处理 错误
  try {
    await sequelize.authenticate()
    console.log('mysql连接成功')
  } catch (e) {
    console.error('mysql连接失败')
  }

  /**
   * 数据库连接完成以后，需要确定操作的表
   * 使用ORM，不需要通过SQL来操作表，而是通过对象来操作
   * 给每一个要操作的表定义一个对象 - 模型 Model
   */
  const UserModel = sequelize.define('users', {
    // 描述表中对应的字段信息 - 现在 UserModel 代表一个表
    // 对应的key默认对应着表的column 字段
    id: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    age: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    gender: {
      type: Sequelize.ENUM(['男', '女', '默认']),
      allowNull: false,
      defaultValue: '保密'
    },
  }, {
    // 用来设置字段以外的其他信息
    timestamps: false,
    paranoid: false,
    freezeTableName: true
  })

  /**
   * 模型类 -> 表
   * 模型创建出来的对象 -> 表中的某条记录
   */
  // 创建了一个User的记录. 注：通过new或者build的对象不会立即同步到数据库中

  // let yk = await UserModel.findById(0)
  // 单条查询
  // let rs = await UserModel.findOne({
  //   where: {
  //     username: 'fri'
  //   }
  // })

  // 查询所有
  // let rs = await UserModel.findAll({
  //   where: {
  //     // 单条件查询
  //     // username: 'lsx',
  //     // age: {
  //     //   [Sequelize.Op.gte]: 28
  //     // }

  //     // 多条件查询
  //     [Sequelize.Op.or]: [
  //       {
  //         age: {
  //           [Sequelize.Op.gt]: 28
  //         }
  //       }, {
  //         gender: '男'
  //       }
  //     ]
  //   }
  // })
  // console.log('rs: ------------------------------- \n', rs)

  // let count = await UserModel.count()
  // let {count, rows} = await UserModel.findAndCountAll({
  //   limit: 2
  // })
  // console.log('count: ', count);
  // console.log('rows: ', rows);

  // 关联查询
  const MessageModel = sequelize.define('messages', {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    uid: {
      type: Sequelize.INTEGER(10),
      default: 0,
      references: {
        model: UserModel,
        key: 'id'
      }
    },
    content: {
      type: Sequelize.STRING(255),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'messages'
  })

  // 获取某条留言的所有数据： 留言本身的数据 + 该留言的用户数据
  // let data = {}
  // let message = await MessageModel.findById(3)
  // let user = await UserModel.findById(message.get('uid'))
  // // console.log('user: ', user);
  // data = {
  //   ...data,
  //   id: message.get('id'),
  //   uid: message.get('uid'),
  //   username: user.get('username'),
  //   age: user.get('age'),
  //   gender: user.get('gender'),
  //   content: message.get('content')
  // }
  // console.log('data: ', data);

  // MessageModel.belongsTo(UserModel, {
  //   foreignKey: 'uid'
  // })

  // let data2 = await MessageModel.findById(1, {
  //   include: [UserModel]
  // })
  // console.log(`
  //   留言id: ${data2.id},
  //   留言人: ${data2.user.username},
  //   留言内容: ${data2.content}
  // `);

  UserModel.hasMany(MessageModel, {
    foreignKey: 'uid'
  })
  let data3 = await UserModel.findById(4, {
    include: [MessageModel]
  })
  console.log('data3: ', data3)
})()
