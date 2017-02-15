/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alarmsecurity', {
    AlarmID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    AlarmHostID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'alarmsecurity'
  });
};
