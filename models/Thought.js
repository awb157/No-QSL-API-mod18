const { Schema, model } = require('mongoose');
const reactionSchema=require("./Reaction")
const thoughtSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    textbody: {
      type: String,
      required: true
    },
    createdat: {
      type: Date,
      default: Date.now(),
    },
  
    reactions: [
      reactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
