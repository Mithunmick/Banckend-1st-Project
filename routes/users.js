const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const { protect, authorize } = require('../midleware/auth');

const User = require('../models/User');
const advancedResults = require('../midleware/advancedResults');

const router = express.Router({
  mergeParams: true,
});

router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
