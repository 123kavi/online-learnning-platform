// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');
// const User = require('./User');
// const Course = require('./Course');

// const Enrollment = sequelize.define('Enrollment', {
//     userId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: User,
//             key: 'id'
//         }
//     },
//     courseId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Course,
//             key: 'id'
//         }
//     }
// });

// module.exports = Enrollment;


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path to your database configuration
const User = require('./User'); // Adjust the path to your User model
const Course = require('./Course'); // Adjust the path to your Course model

const Enrollment = sequelize.define('Enrollment', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    }
});

Enrollment.belongsTo(User, { foreignKey: 'userId' });
Enrollment.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = Enrollment;
