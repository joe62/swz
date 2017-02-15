/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('territories', {
    TerritoryID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    TerritoryDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RegionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'region',
        key: 'RegionID'
      }
    }
  }, {
    tableName: 'territories'
  });
};
