/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_server', {
    DomainGUID: {
      type: "LONGBLOB",
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LongName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ShortName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ParentGUID: {
      type: "LONGBLOB",
      allowNull: false
    },
    ShowOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0"
    },
    DBConnStr: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'base_server'
  });
};
