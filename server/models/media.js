'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Media.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    release_date: DataTypes.DATE,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Media',
    tableName: 'media'
  });
  return Media;
};