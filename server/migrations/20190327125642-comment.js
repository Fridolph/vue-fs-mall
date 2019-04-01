'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键ID - 评论',
      },
      userId: {
        type: Sequelize.INTEGER,
        comment: '创建评论的用户ID',
        field: 'user_id',
        allowNull: false,
        defaultValue: 0
      },
      cookbookId: {
        type: Sequelize.INTEGER,
        comment: '该评论的来源',
        field: 'cookbook_id',
        allowNull: false,
        defaultValue: 0
      },
      title: {
        type: Sequelize.STRING,
        comment: '该条评论标题',
        allowNull: false,
        defaultValue: ''
      },
      content: {
        type: Sequelize.STRING(1000),
        comment: '该条评论内容',
        allowNull: false,
        defaultValue: ''
      },
      createdIpAt: {
        type: Sequelize.CHAR(15),
        comment: '写下该条评论的用户的IP地址',
        allowNull: false,
        field: 'created_ip_at',
        defaultValue: ''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '评论创建时间',
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '评论修改时间',
        field: 'updated_at'
      }
    }, {
      tableName: 'comment',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: [
        {

        }
      ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comment');
  }
};
