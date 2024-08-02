const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  name: String,
  description: String,
  sourceType: String,
  content: String,
  checksum: String,
  fileKey: String,
  fileUrl: String,
  status: String
}, {
  timestamps: true
});

const topicSchema = new mongoose.Schema({
  name: String,
  isDefault: Boolean,
  isSystem: Boolean,
  key: String,
  sources: [sourceSchema],  
}, {
  timestamps: true
})

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
