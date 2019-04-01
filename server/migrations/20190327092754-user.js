// comment: '主键ID - 用户',
// comment: '用户名',
// comment: '用户密码',
// comment: '是否被禁用（黑名单）',
// comment: '用户手机号码',
// comment: '用户邮箱',
// comment: '用户注册时所在地IP',
// comment: '用户最近一次登录的IP',
// comment: '用户注册时间',
// comment: '用户最近一次的登录时间',
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
        defaultValue: ''
      },
      password: {
        type: Sequelize.CHAR(32),
        allowNull: false,
        defaultValue: ''
      },
      disabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      mobile: {
        type: Sequelize.CHAR(12),
        unique: true,
        allowNull: false,
        defaultValue: ''
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
        defaultValue: ''
      },
      created_ip_at: {
        type: Sequelize.CHAR(15),
        allowNull: false,
        field: 'created_ip_at',
        defaultValue: ''
      },
      updated_ip_at: {
        type: Sequelize.CHAR(15),
        allowNull: false,
        field: 'updated_ip_at',
        defaultValue: ''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    }, {
      tableName: 'user',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: [{}]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};
