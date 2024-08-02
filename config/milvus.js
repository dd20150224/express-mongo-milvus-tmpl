const { MilvusClient } = require('@zilliz/milvus2-sdk-node')

let milvusClient = null;
try {
  milvusClient = new MilvusClient({
    address: `${process.env.MILVUS_HOST}:${process.env.MILVUS_PORT}`
  })
  console.log('Connected to Milvus')
} catch(error) {
  console.error('Error connecting to Milvus:', error);
};

module.exports = milvusClient
