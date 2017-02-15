/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_eventsourcetype', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SourceType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ChnDescript: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'base_eventsourcetype'
  });
};
