/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campreset', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    camid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    preset: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    camtype: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    tableName: 'campreset'
  });
};
