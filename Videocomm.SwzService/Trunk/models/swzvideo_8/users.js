/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    grade: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0"
    },
    domainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'users'
  });
};
