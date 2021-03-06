/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iszonesensors', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ZoneID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SensorID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SourceType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'iszonesensors'
  });
};
