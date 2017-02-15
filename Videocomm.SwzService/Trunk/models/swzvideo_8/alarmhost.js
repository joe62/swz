/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alarmhost', {
    AlarmHostID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ConnParam: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'alarmhost'
  });
};
