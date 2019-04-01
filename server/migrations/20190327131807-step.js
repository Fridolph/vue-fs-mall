'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('step', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键ID - 步骤',
      },
      cookbookId: {
        type: Sequelize.INTEGER,
        comment: '隶属的美食ID',
        field: 'cookbook_id',
        allowNull: false,
        defaultValue: 0
      },
      pic: {
        type: Sequelize.CHAR(15),
        comment: '',
        allowNull: false,
        defaultValue: ''
      },
      description: {
        type: Sequelize.STRING,
        comment: '步骤描述',
        allowNull: false,
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
      tableName: 'step',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: [
        {

        }
      ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('step');
  }
};
