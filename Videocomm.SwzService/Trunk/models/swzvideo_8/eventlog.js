/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventlog', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sourceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sourceType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sourcename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    descript: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    EventTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    acked: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    ackuser: {
      type: DataTypes.STRING,
      allowNull: true
    },
    acktime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pic1: {
      type: "LONGBLOB",
      allowNull: true
    },
    pic2: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'eventlog'
  });
};
