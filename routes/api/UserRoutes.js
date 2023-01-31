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


router.route('/').get(getUsers).post(createUsers);


router.route('/:UsersId').get(getSingleUsers).delete(deleteUsers).put(editUsers);


router.route('/:UsersId/friends/:friendsId').post(addFriend).delete(removeFriend);


router.route('/:removeFriend');

module.exports = router;
