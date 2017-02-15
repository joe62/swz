/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mapitemtbl', {
    itemid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mapid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    itemleft: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    itemtop: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    itemwidth: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    itemheight: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    itemname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sqlid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    itemtype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    color: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    font: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iconID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    groupGUID: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'mapitemtbl'
  });
};
