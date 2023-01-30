const router = require('express').Router();
const { Router } = require('express');
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/Thought
router.route('/').get(getThought).post(createThought);

// /api/Thought/:ThoughtId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router.route('/:thoughtId/reactions').post(addReaction)
  router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)
module.exports = router;
