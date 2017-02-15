/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuh323', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ipaddr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    usr: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'mcuh323'
  });
};
