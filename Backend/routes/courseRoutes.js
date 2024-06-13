const express = require('express');
const { getAllCourses, addCourse, updateCourse, deleteCourse,getCourseById } = require('../controllers/courseController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getAllCourses);
router.post('/', authMiddleware, adminMiddleware, addCourse);
router.put('/:id', authMiddleware, adminMiddleware, updateCourse);
router.delete('/:id', authMiddleware, adminMiddleware, deleteCourse);
router.get('/:id', authMiddleware, adminMiddleware,getCourseById);

module.exports = router;
