/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iszoneschedules', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ZonerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ScheduleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ScheduleType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'iszoneschedules'
  });
};
