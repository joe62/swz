/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('decoderchann', {
    DecChannId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Indx: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Decname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cardNo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cardChann: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DecoderId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    defaultDivision: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'decoderchann'
  });
};
