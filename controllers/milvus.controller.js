const milvusClient = require('../config/milvus');

const MilvusController = {
  getCollections: async (req, res) => {

  },

  getDatabases: async (req, res) => {
    const databases = await milvusClient.list_databases();
    return res.json({
      result: databases
    });
  },

}

module.exports = MilvusController;
