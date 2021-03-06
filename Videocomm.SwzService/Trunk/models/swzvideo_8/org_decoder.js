/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org_decoder', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orgid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DecoderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'org_decoder'
  });
};
