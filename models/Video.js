const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  timeStamp: String,
  keywords: Array,
  description: String,
})

const VideoSchema = new Schema({
  description: String,
  videoUrl: String,
  keywords: Array,
  tags: [TagSchema]
});

module.exports = Video = mongoose.model("video", VideoSchema);
