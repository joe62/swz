/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('camaux', {
    auxid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    camid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    auxindex: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    auxname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'camaux'
  });
};
