/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuvideoagen', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Port: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AgenId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    virFirstIp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    virLastIp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    virMark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mcuvideoagen'
  });
};
