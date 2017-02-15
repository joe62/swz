/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matrixcamtbl', {
    jzcamid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    jzid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    videoin: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'matrixcamtbl'
  });
};
