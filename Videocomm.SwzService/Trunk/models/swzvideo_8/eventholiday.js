/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventholiday', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    EventID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ScheduleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'eventholiday'
  });
};
