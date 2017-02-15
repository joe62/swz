/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeterritories', {
    EmployeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employees',
        key: 'EmployeeID'
      }
    },
    TerritoryID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'territories',
        key: 'TerritoryID'
      }
    }
  }, {
    tableName: 'employeeterritories'
  });
};
