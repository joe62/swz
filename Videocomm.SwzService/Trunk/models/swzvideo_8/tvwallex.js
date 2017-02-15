/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvwallex', {
    wallId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DomainId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    AlarmChannBegin: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    AlarmChannEnd: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ShowOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    TourInterval: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'tvwallex'
  });
};
