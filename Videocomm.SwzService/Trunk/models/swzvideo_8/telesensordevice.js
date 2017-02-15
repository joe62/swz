/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telesensordevice', {
    DeviceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ConnParam: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    DeviceIP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DevicePort: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Deviceuser: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DevicePass: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'telesensordevice'
  });
};
