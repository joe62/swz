/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedule', {
    scheduleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    b1: {
      type: DataTypes.DATE,
      allowNull: false
    },
    e1: {
      type: DataTypes.DATE,
      allowNull: false
    },
    b2: {
      type: DataTypes.DATE,
      allowNull: false
    },
    e2: {
      type: DataTypes.DATE,
      allowNull: false
    },
    b3: {
      type: DataTypes.DATE,
      allowNull: true
    },
    e3: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b4: {
      type: DataTypes.DATE,
      allowNull: true
    },
    e4: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b5: {
      type: DataTypes.DATE,
      allowNull: true
    },
    e5: {
      type: DataTypes.DATE,
      allowNull: true
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    },
    typecode: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    execDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'schedule'
  });
};
