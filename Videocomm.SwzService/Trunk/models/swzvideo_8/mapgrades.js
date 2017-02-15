/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mapgrades', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MapId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    RoleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'mapgrades'
  });
};
