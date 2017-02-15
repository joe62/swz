/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_videoanalysis', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    funccode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descript_chn: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'base_videoanalysis'
  });
};
