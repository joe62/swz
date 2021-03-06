/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_grade', {
    AUTOID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ROLEID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    VSID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    GROUPID: {
      type: "LONGBLOB",
      allowNull: false
    }
  }, {
    tableName: 'admin_grade'
  });
};
