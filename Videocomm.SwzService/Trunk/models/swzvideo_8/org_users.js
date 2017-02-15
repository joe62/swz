/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org_users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    orgid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'org_users'
  });
};
