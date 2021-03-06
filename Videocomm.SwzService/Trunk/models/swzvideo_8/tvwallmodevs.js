/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvwallmodevs', {
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
    vsmode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    showorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'tvwallmodevs'
  });
};
