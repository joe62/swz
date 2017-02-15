/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuzoneterminal', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ItemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DeviceName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DeviceType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    AgenId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AgenIp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Showorder: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DomainGuid: {
      type: "LONGBLOB",
      allowNull: true
    },
    AplyData: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mcuzoneterminal'
  });
};
