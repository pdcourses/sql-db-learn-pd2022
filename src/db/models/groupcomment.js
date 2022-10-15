'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GroupComment.hasMany(models.Comment, 
        {
        foreignKey: {
          field: 'groupCommentId'
        }
      });
      
    }
  }
  GroupComment.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GroupComment',
  });
  return GroupComment;
};