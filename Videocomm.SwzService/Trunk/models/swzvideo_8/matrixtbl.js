/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matrixtbl', {
    jzid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jzlogin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    mode: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "30"
    }
  }, {
    tableName: 'matrixtbl'
  });
};
