/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('isdeviceshosts', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProtocolType: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0"
    },
    Encoding: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SourceType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
    ReconnectionStrategy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Action: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "2"
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Address: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PeriodI: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PeriodII: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ArmTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-08-18"
    },
    AlarmTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-08-29 16:00:00"
    },
    State: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'isdeviceshosts'
  });
};
