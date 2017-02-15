/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('videolib', {
    vdoid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    camid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    begintm: {
      type: DataTypes.DATE,
      allowNull: false
    },
    RecType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    filepath: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isbackup: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    endtm: {
      type: DataTypes.DATE,
      allowNull: false
    },
    campos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    server: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EventID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'videolib'
  });
};
