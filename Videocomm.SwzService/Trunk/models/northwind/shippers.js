/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shippers', {
    ShipperID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'shippers'
  });
};
