/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuyuanitem', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TerminalId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    YuanId: {
      type: "LONGBLOB",
      allowNull: false
    },
    Quality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProxySvrId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DomainGUID: {
      type: "LONGBLOB",
      allowNull: true
    },
    AgenIp: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mcuyuanitem'
  });
};
