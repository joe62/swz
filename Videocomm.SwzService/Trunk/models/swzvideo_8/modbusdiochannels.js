/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modbusdiochannels', {
    ChannelID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DeviceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ChannelNo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    AlarmType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    LowLevelDes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HightLeveDes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Action: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "2"
    },
    Value: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    ArmTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-08-18 17:00:00"
    },
    AlarmTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-08-18 17:00:00"
    },
    AlarmIconId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "-1"
    }
  }, {
    tableName: 'modbusdiochannels'
  });
};
