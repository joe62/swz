/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userroles', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    roleid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'userroles'
  });
};
