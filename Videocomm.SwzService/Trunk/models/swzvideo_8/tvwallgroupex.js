/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvwallgroupex', {
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
    DecChannId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ShowOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "0,0,0,0"
    }
  }, {
    tableName: 'tvwallgroupex'
  });
};
