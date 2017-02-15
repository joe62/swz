/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('camsnapshot', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    camid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pic: {
      type: "LONGBLOB",
      allowNull: false
    },
    eventid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pictime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    memo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'camsnapshot'
  });
};
