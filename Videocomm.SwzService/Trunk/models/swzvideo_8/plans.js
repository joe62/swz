/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plans', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    usr: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'plans'
  });
};
