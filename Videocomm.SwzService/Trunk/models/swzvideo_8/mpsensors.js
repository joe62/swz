/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mpsensors', {
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
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Action: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SensorNo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SensorType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Indx: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Points: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Statue: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-01-01 00:00:00"
    }
  }, {
    tableName: 'mpsensors'
  });
};
