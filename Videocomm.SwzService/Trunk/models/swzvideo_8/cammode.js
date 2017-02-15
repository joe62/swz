/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cammode', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'cammode'
  });
};
