/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vicondevice', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProtocolType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    ProtocolParam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Port: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'vicondevice'
  });
};
