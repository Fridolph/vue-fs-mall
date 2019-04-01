'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('favorite', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键ID - 最爱',
      },
      cookbookId: {
        type: Sequelize.INTEGER,
        comment: '喜欢的美食ID',
        field: 'cookbook_id',
        allowNull: false,
        defaultValue: 0
      },
      userId: {
        type: Sequelize.INTEGER,
        comment: '这条最爱所属用户',
        field: 'user_id',
        allowNull: false,
        defaultValue: 0
      },
      createdIpAt: {
        type: Sequelize.CHAR(15),
        comment: '',
        allowNull: false,
        field: 'created_ip_at',
        defaultValue: ''
      },
      updatedIpAt: {
        type: Sequelize.CHAR(15),
        comment: '',
        allowNull: false,
        field: 'updated_ip_at',
        defaultValue: ''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '',
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '',
        field: 'updated_at'
      }
    }, {
      tableName: 'favorite',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: [
        {

        }
      ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('favorite');
  }
};
