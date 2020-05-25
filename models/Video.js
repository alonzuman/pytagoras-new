const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  timeStamp: String,
  keywords: Array,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

const VideoSchema = new Schema({
  description: String,
  videoUrl: String,
  username: String,
  keywords: Array,
  tags: [TagSchema],
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Video = mongoose.model("video", VideoSchema);
