/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuchannel', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mcuid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bandwidth: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vsize: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fps: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'mcuchannel'
  });
};
