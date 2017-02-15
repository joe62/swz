/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proxyserver_camtotal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    proxysvrid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    camtotal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'proxyserver_camtotal'
  });
};
