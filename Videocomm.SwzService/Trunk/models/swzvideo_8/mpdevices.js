/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mpdevices', {
    DeviceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SubsysID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SubcellA: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SubcellB: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DeviceNo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Action: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "19"
    },
    KeyPoint: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Points: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SourceType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DT: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "2011-06-27 00:00:00"
    }
  }, {
    tableName: 'mpdevices'
  });
};
