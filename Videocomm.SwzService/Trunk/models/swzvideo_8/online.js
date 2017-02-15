/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('online', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    usr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logintm: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: "0"
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'online'
  });
};
