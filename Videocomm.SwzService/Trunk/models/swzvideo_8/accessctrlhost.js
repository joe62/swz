/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accessctrlhost', {
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
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SerialPortParas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    MessageTypes: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Encoding: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Active: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "2"
    },
    ArmTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-08-18 17:00:00"
    }
  }, {
    tableName: 'accessctrlhost'
  });
};
