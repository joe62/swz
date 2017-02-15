/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuzonegroup', {
    Id: {
      type: "LONGBLOB",
      allowNull: false
    },
    GroupName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    GroupType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DispatchId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Showorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'mcuzonegroup'
  });
};
