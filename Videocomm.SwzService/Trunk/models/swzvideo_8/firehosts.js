/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('firehosts', {
    DeviceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SerialPortParas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Encoding: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Active: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "2"
    },
    UserNo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'firehosts'
  });
};
