/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('viconmacro', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DeviceId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    MacroNo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    MacroName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'viconmacro'
  });
};
