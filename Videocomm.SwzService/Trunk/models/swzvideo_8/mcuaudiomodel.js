/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuaudiomodel', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    describe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mcuaudiomodel'
  });
};
