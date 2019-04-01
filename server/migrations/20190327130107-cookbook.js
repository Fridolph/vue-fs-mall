'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cookbook', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键ID - 美食'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '美食名称'
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false,
        defaultValue: 0,
        comment: '该条美食的创建用户'
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        allowNull: false,
        defaultValue: 0,
        comment: '美食所属分类的ID'
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '美食简介'
      },
      cover: {
        type: Sequelize.CHAR(15),
        allowNull: false,
        defaultValue: '',
        comment: ''
      },
      craftId: {
        type: Sequelize.INTEGER,
        field: 'craft_id',
        allowNull: false,
        defaultValue: 0,
        comment: ''
      },
      levelId: {
        type: Sequelize.INTEGER,
        field: 'level_id',
        allowNull: false,
        defaultValue: 0,
        comment: ''
      },
      tasteId: {
        type: Sequelize.INTEGER,
        field: 'taste_id',
        allowNull: false,
        defaultValue: 0,
        comment: ''
      },
      needTime: {
        type: Sequelize.INTEGER(5),
        field: 'need_time',
        allowNull: false,
        defaultValue: 0,
        comment: '烹饪该美食所需时间'
      },
      ingredients: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        defaultValue: '',
        comment: '烹饪该美食所需原材料'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        comment: ''
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        comment: ''
      }
    }, {
      tableName: 'cookbook',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: [{}]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cookbook');
  }
};
