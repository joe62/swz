/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_isprotocoltypes', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    AlarmType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProtocolContext: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SourceType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IconId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "-1"
    },
    PType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'base_isprotocoltypes'
  });
};
