/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proxyroute', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DomainGUID: {
      type: "LONGBLOB",
      allowNull: false
    },
    route: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'proxyroute'
  });
};
