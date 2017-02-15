/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customercustomerdemo', {
    CustomerID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'customers',
        key: 'CustomerID'
      }
    },
    CustomerTypeID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'customerdemographics',
        key: 'CustomerTypeID'
      }
    }
  }, {
    tableName: 'customercustomerdemo'
  });
};
