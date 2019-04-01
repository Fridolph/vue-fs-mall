'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('login-log', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键ID - 登录记录',
      },
      userId: {
        type: Sequelize.INTEGER,
        comment: '用户ID',
        field: 'user_id',
        allowNull: false,
        defaultValue: 0
      },
      loginIpAt: {
        type: Sequelize.CHAR(15),
        comment: '该次登录的IP地址',
        allowNull: false,
        field: 'login_ip_at',
        defaultValue: ''
      },
      loginAt: {
        type: Sequelize.DATE,
        comment: '该次登录的时间',
        allowNull: false,
        field: 'login_at'
      }
    }, {
      tableName: 'login-log',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      timestamp: false,
      indexes: [
        {

        }
      ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('login-log');
  }
};
