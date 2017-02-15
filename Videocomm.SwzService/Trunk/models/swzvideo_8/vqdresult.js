/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vqdresult', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    insCameraID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vqdCameraID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    eventID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    vqdIP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    width: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    checktime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vqdResult: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    signal: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    blur: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    contrast: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    bright: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dark: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    chroma: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    mono: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    noise: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    strip: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    freeze: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    shake: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    flash: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    scene: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cover: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ptz: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    snapshotURL: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'vqdresult'
  });
};
