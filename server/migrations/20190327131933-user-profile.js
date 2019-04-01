'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user-profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键ID - 用户更多信息',
      },
      userId: {
        type: Sequelize.INTEGER,
        comment: '用户ID',
        field: 'user_id',
        unique: true,
        allowNull: false,
        defaultValue: 0
      },
      nickname: {
        type: Sequelize.STRING,
        comment: '昵称',
        allowNull: false,
        defaultValue: ''
      },
      realName: {
        type: Sequelize.STRING,
        comment: '用户真实姓名',
        field: 'real_name',
        allowNull: false,
        defaultValue: ''
      },
      gender: {
        type: Sequelize.ENUM(['男','女','保密']),
        comment: '性别',
        allowNull: false,
        defaultValue: '保密'
      },
      birthday: {
        type: Sequelize.DATE,
        comment: '生日',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '用户信息创建时间',
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '用户信息最近更新时间',
        field: 'updated_at'
      }
    }, {
      tableName: 'user-profile',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: [
        {

        }
      ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user-profile');
  }
};
