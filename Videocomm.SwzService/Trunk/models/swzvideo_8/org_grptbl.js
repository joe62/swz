/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org_grptbl', {
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
    GroupGUID: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'org_grptbl'
  });
};
