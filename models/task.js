'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Task.init(
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      deadline: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'is_done',
      },
      priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        allowNull: false,
        defaultValue: 'medium',
      },
    },
    {
      sequelize,
      modelName: 'Task',
      underscored: true,
    }
  );

  return Task;
};
