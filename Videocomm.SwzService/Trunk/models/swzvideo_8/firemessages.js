/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('firemessages', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DeviceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SensorNo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MessageType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Active: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "2"
    }
  }, {
    tableName: 'firemessages'
  });
};
