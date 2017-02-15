/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servermonitor', {
    AUTOID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ServerIp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ServerPort: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NetType: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0"
    },
    online: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    lasttime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'servermonitor'
  });
};
