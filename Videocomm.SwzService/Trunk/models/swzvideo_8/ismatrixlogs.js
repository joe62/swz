/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ismatrixlogs', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DeviceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ChannelID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CommandType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DateTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ismatrixlogs'
  });
};
