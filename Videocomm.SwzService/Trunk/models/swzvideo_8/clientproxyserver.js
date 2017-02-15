/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientproxyserver', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    proxyserver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    iprange: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'clientproxyserver'
  });
};
