'use strict';
module.exports = (sequelize, DataTypes) => {
  var fan = sequelize.define('fan', {
    nickname: DataTypes.STRING
  }, {});
  fan.associate = function(models) {
    // associations can be defined here
  };
  return fan;
};