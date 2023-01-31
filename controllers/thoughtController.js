const { Thought } = require('../models');

const thoughtController = {

  getThought(req, res) {
    Thought.find()
      .then((dbThoughtData) => {
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
 
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.ThoughtId })
      .then((dbThoughtData) => {
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
 
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
       
      })
      .then((dbUserData) => {

        res.json({ message: 'Thought added.' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.ThoughtId }, { $set: req.body }, { runValidators: true, new: true })
      .then((thought) => {

        res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.ThoughtId })
      .then((dbThoughtData) => {
      
        res.json({ message: 'Thought deleted' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbThoughtData) => {
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
 
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((dbThoughtData) => {

        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
