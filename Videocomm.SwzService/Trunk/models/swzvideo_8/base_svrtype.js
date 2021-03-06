/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_svrtype', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    servertype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firmware: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: "3"
    },
    mpeg4: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    audio: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    comport: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "1"
    },
    videoport: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    pluginname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    defusr: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "root"
    },
    defpwd: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "pass"
    },
    defnetport: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "80"
    },
    defdi: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0"
    },
    defdo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0"
    },
    videofunc: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    tableName: 'base_svrtype'
  });
};
