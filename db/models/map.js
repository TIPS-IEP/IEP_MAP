/* jshint indent: 2 */
'use strict';
//Alumni Data
module.exports = (sequelize, DataTypes) => {
  var Alumni = sequelize.define('Alumni', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    englishName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    university: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    instagramUsername: {
      type: DataTypes.STRING,
      allowNull: true
    },
    graduationYear: {
      type: DataTypes.INT,
      allowNull: false
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Alumni;
}

//University Data
module.exports = (sequelize, DataTypes) => {
  var University = sequelize.define('University', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_lat: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      unique: true
    },
    instagramUsername: {
      type: DataTypes.STRING,
      allowNull: true
    },
    graduationYear: {
      type: DataTypes.INT,
      allowNull: false
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Alumni;
}