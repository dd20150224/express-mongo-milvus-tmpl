const Topic = require('../models/topic');

const TopicController = {
  index: async (req, res) => {
    const topics = await Topic.find().lean();

    return res.json({
      result: topics
    });
  }
}

module.exports = TopicController;
