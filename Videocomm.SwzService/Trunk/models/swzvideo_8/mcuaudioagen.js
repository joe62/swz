/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuaudioagen', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Port: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AgenId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ReservedStart: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ReservedEnd: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mcuaudioagen'
  });
};
