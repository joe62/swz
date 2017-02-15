/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maplinks', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MapId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SensorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SourceType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Font: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Points: {
      type: DataTypes.STRING,
      allowNull: false
    },
    GroupGuid: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'maplinks'
  });
};
