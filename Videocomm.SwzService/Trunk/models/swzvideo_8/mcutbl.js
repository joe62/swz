/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcutbl', {
    MCUID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deviceip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deviceport: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    logname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logpwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    virFirstIp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    virLastIp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    virMask: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'mcutbl'
  });
};
