/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('decoder', {
    DecoderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Login: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Pass: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DecoderType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Descript: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DomainID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'decoder'
  });
};
