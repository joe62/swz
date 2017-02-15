/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accessctrlemployees', {
    EmployeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CardNo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Telephone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Photo: {
      type: "LONGBLOB",
      allowNull: true
    },
    Note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'accessctrlemployees'
  });
};
