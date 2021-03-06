/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvwallcameras', {
    AUTOID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    WallId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CamId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ShowOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DomainGuid: {
      type: "LONGBLOB",
      allowNull: false
    }
  }, {
    tableName: 'tvwallcameras'
  });
};
