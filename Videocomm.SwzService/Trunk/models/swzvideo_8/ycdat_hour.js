/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ycdat_hour', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sensor_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    yctm: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ycdat_hour'
  });
};