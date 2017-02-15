/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('region', {
    RegionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    RegionDescription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'region'
  });
};
