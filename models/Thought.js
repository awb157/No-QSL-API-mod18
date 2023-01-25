const { Schema, model } = require('mongoose');

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
