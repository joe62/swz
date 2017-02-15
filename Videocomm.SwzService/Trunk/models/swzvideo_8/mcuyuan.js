/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcuyuan', {
    Id: {
      type: "LONGBLOB",
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Template: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ConQuality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Showorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DispatchId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'mcuyuan'
  });
};
