/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_conntype', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    conntype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pluginname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firmware: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'base_conntype'
  });
};
