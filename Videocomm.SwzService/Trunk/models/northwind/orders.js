/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    OrderID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CustomerID: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'CustomerID'
      }
    },
    EmployeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'employees',
        key: 'EmployeeID'
      }
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RequiredDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShippedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShipVia: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'shippers',
        key: 'ShipperID'
      }
    },
    Freight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0000"
    },
    ShipName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipCity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipRegion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipPostalCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipCountry: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'orders'
  });
};
