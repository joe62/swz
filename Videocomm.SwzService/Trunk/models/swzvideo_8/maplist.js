/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maplist', {
    mapid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shortname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    longname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mapwidth: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    mapheight: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    defaultmap: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    mapimage: {
      type: "LONGBLOB",
      allowNull: true
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    thumbnail: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'maplist'
  });
};
