/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('isalarmlogs', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SensorID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    MessageType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    VistaUser: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'isalarmlogs'
  });
};
