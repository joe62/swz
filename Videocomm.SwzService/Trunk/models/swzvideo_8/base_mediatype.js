/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_mediatype', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mediatype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PluginName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Firmware: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'base_mediatype'
  });
};
