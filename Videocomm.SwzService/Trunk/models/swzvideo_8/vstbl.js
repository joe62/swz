/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vstbl', {
    vsid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    httpport: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wanport: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    usr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vspos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    servertype: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    online: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    lasttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Ipinterval: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    domainid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'vstbl'
  });
};
