/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mpdissegments', {
    DisSegmentID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SensorID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    StartSubcellNo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    EndSubcellNo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DisSegmentNo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Action: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    StartPoint: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EndPoint: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2011-01-01 00:00:00"
    }
  }, {
    tableName: 'mpdissegments'
  });
};
