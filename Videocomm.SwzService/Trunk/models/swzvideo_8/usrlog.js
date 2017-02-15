/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usrlog', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usrID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    usr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    usrip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    logstr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tm: {
      type: DataTypes.DATE,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'usrlog'
  });
};
