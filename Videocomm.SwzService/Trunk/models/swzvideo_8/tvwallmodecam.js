/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvwallmodecam', {
    mode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tvwall: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    channel: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cam: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    domainguid: {
      type: "LONGBLOB",
      allowNull: false
    },
    cellno: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    campos: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tvwallmodecam'
  });
};
