/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mpsubsystems', {
    SubsysID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PortName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SMI: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SMP: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Action: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "19"
    },
    DT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-06-28 00:00:00"
    },
    SysType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'mpsubsystems'
  });
};
