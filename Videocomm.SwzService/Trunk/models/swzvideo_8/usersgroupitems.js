/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usersgroupitems', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserGroupID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DomainGUID: {
      type: "LONGBLOB",
      allowNull: false
    },
    UnitID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    UnitType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    UnitName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'usersgroupitems'
  });
};
