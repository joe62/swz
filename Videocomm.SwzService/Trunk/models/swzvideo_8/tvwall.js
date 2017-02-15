/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvwall', {
    wallID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    wallIp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wallPort: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cardno: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1"
    },
    videoout: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    videooutname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wallType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: true
    },
    screenno: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    areacount: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    layout: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    initallayout: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tvwall'
  });
};
