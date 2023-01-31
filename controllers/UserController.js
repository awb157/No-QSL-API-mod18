const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  
  getSingleUsers(req, res) {
    User.findOne({ _id: req.params.UsersId })
      .select('-__v')
      .then(async (user) =>
       res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  
  createUsers(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  
     deleteUsers(req, res) {
    User.findOneAndRemove({ _id: req.params.UsersId })
      .then((user) =>{
        console.log('user deleted')
        res.json(user)
      }
        
      )
      
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  editUsers(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.UsersId },
      {$set: req.body,},
      {
        runValidators: true,
        new: true,
      }
    )
      .then((user) => {
       
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  addFriend(req, res) {
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.UsersId },
      { $addToSet: { friends: req.params.friendsId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
       res.json(user) 
      )
      .catch((err) => res.status(500).json(err));
  },
  
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.UsersId },
      { $pull: { friends:req.params.friendsId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
       res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
