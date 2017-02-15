/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('planitems', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    planId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'planitems'
  });
};
