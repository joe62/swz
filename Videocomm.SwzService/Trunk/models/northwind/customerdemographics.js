/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customerdemographics', {
    CustomerTypeID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CustomerDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'customerdemographics'
  });
};
