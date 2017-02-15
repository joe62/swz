/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telesensor', {
    SensorID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DeviceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SensorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Port: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    LC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LowLimite: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HighLimite: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RangeAlarm: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ChangeAlarm: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    intertm: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'telesensor'
  });
};
