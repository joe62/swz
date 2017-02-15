/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('videolib_label', {
    Labid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    vodid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alarmid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    labtime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'videolib_label'
  });
};
