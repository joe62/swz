/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_firemessagestypes', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MessageDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MessageType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Color: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'base_firemessagestypes'
  });
};
