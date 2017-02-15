/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvwallmode', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wall: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    vsmode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    descript: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tvwallmode'
  });
};
