/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcudispatch', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    VideoGateway: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AudioGateway: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LHelm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LYHelm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RHelm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RYHelm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'mcudispatch'
  });
};
