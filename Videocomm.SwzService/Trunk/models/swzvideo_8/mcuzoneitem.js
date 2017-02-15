/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuzoneitem', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ItemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    GroupId: {
      type: "LONGBLOB",
      allowNull: false
    },
    Showorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'mcuzoneitem'
  });
};
