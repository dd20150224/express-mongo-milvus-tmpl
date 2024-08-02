const express = require('express');
const router = express.Router();

const topicsRouter = require('./topics');
const milvusRouter = require('./milvus');

// mongodb
router.use('/topics', topicsRouter);

// milvus
router.use('/milvus', milvusRouter)

module.exports = router;
