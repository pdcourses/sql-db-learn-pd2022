'use strict';
const {ROLES}  = require('../../constants.js');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.belongsToMany(models.User, { through: 'UserRoles'});
    }
  }
  Role.init({
    name: DataTypes.ENUM(...Object.values(ROLES)),
    allowNull: false
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};