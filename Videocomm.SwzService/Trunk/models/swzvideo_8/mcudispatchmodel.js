/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcudispatchmodel', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'mcudispatchmodel'
  });
};
