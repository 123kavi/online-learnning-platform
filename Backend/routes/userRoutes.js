const express = require('express');
const { getUsers, createUserAccount, updateUserDetails, removeUser,getUserById ,updateUserById} = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, adminMiddleware, getUsers);
router.post('/', authMiddleware, adminMiddleware, createUserAccount);
router.put('/', authMiddleware, adminMiddleware, updateUserDetails);
router.delete('/', authMiddleware, adminMiddleware, removeUser);
router.get('/:id', authMiddleware, adminMiddleware,getUserById);
router.put('/:id', authMiddleware, adminMiddleware,updateUserById);

module.exports = router;
