/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iszones', {
    ZoneID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ZoneName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Action: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "2"
    },
    StartDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EndDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'iszones'
  });
};
