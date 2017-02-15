/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grptbl', {
    DomainGUID: {
      type: "LONGBLOB",
      allowNull: false
    },
    GroupGUID: {
      type: "LONGBLOB",
      allowNull: false
    },
    ParentGUID: {
      type: "LONGBLOB",
      allowNull: false
    },
    GroupName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    GroupType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ShowOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    tableName: 'grptbl'
  });
};
