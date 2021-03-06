/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_mpsensortypes', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    AlarmType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProtocolContext: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Color: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IconId: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'base_mpsensortypes'
  });
};
