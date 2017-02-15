/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modebusaiaochannels', {
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
    LC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LowLimite: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    HightLimite: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ChangeAlarm: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Action: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "2"
    },
    Value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0.0000"
    },
    ArmTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-08-18 00:00:00"
    },
    AlarmTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-08-18 00:00:00"
    },
    AlarmIconId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "-1"
    }
  }, {
    tableName: 'modebusaiaochannels'
  });
};
