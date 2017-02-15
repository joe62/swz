/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('base_accessctrlmessages', {
    MessageID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DoorNoPosition: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CardNoPosition: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AlarmState: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Mask: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Icon: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "-1"
    }
  }, {
    tableName: 'base_accessctrlmessages'
  });
};
