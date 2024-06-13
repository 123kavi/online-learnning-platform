// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');

// const Course = sequelize.define('Course', {
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.TEXT,
//         allowNull: false
//     }
// });

// module.exports = Course;

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path to your database configuration

const Course = sequelize.define('Course', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    courseenrolmentid: {
      type: DataTypes.TEXT,
      allowNull: false
  }



    
});
// Get user by ID
Course.getCourseById = async function(id) {
    try {
      const course = await Course.findByPk(id);
      return course;
    } catch (err) {
      throw new Error('Error fetching user by ID');
    }
  };
module.exports = Course;
