/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_config', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Param: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'base_config'
  });
};
