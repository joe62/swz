/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todoassignees', {
    primary: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    TodoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      references: {
        model: 'todos',
        key: 'id'
      }
    }
  }, {
    tableName: 'todoassignees'
  });
};
