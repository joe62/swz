/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_agen', {
    agenid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    agenip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    agenport: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    WanAddr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WanPort: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Domain: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1"
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'base_agen'
  });
};
