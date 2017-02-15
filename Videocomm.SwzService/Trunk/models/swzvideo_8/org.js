/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org', {
    orgid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orgname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parentid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ShowOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'org'
  });
};
