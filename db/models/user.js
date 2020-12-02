'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isEmail: true,
        len: [3, 255],
      }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      },
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validates: {
        len: [60, 60],
      },
    },
    tokenId: {
      type: DataTypes.STRING
    }
  }, {});

  User.associate = function (models) {
    User.hasMany(models.Exercise, { foreignKey: 'user_id', onDelete: 'CASCADE', hooks: true });
    User.hasMany(models.Workout, { foreignKey: 'user_id', onDelete: 'CASCADE', hooks: true });
  };

  return User;
};