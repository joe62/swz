/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    roleid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rolename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ctrlgrade: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    access: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    usertype: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'roles'
  });
};
