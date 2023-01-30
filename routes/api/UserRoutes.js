const router = require('express').Router();
const {
  getUsers,
  getSingleUsers,
  createUsers,
  editUsers,
  deleteUsers,
  addFriend,
  removeFriend,
} = require('../../controllers/UserController');

// /api/users
router.route('/').get(getUsers).post(createUsers);

// /api/students/:studentId
router.route('/:UsersId').get(getSingleUsers).delete(deleteUsers);

// /api/students/:studentId/assignments
router.route('/:UsersId/friends/:friendsId').post(addFriend).delete(removeFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:removeFriend');

module.exports = router;
