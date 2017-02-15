/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('camguardtours', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    camid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    running: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GuardNbr: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tourPos: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'camguardtours'
  });
};
