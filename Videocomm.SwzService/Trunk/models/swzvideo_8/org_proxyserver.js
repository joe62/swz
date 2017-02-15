/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org_proxyserver', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    orgid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    proxysvrid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'org_proxyserver'
  });
};
