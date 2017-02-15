/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modbusdevices', {
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
    SerialPortParas: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "‘’"
    },
    Address: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PeriodDIDO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PeriodAIAO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Action: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "2"
    },
    ArmTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-08-18"
    }
  }, {
    tableName: 'modbusdevices'
  });
};
