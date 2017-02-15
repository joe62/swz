/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('syslog', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Source: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Logstr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Tm: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Server: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'syslog'
  });
};
