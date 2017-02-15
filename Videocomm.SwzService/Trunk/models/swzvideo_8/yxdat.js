/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yxdat', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sensorid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    vaule: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    yxtm: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'yxdat'
  });
};
