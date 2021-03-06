/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vsiotbl', {
    Vsioid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    vsid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ioindex: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    iotype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'vsiotbl'
  });
};
