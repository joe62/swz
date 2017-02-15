/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    ProductID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SupplierID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'suppliers',
        key: 'SupplierID'
      }
    },
    CategoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'categories',
        key: 'CategoryID'
      }
    },
    QuantityPerUnit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UnitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0000"
    },
    UnitsInStock: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: "0"
    },
    UnitsOnOrder: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: "0"
    },
    ReorderLevel: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: "0"
    },
    Discontinued: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'products'
  });
};
