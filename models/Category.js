const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection.js')

class Category extends Model {}

Category.init(
  {
    // define columns
    // id INT NOT NULL AUTO_INCREMENT
    // category_name VARCHAR NOT NULL
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
)

module.exports = Category
