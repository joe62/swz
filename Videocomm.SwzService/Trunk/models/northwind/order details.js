/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order details', {
    OrderID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'OrderID'
      }
    },
    ProductID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'ProductID'
      }
    },
    UnitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0.0000"
    },
    Quantity: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: "1"
    },
    Discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'order details'
  });
};
