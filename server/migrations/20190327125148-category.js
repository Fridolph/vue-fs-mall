'use strict';

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键ID - 分类',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '分类名'
      },
      pid: {
        type: Sequelize.INTEGER,
        comment: '父类ID',
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '分类创建时间',
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '分类最近更新时间',
        field: 'updated_at'
      }
    }, {
      tableName: 'category',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: [
        {

        }
      ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('category');
  }
};
