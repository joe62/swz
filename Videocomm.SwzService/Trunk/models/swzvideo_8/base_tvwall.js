/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_tvwall', {
    WallType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PluginName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    caps: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    channcount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'base_tvwall'
  });
};
