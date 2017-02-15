/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcurecord', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    McuId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    TelePhone1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TelePhone2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DTime: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'mcurecord'
  });
};
