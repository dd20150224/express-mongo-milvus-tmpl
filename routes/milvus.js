const express = require('express')
const router = express.Router()
const MilvusController = require('../controllers/milvus.controller')

router.get('/databases', MilvusController.getDatabases);
router.get('/colections', MilvusController.getCollections);

module.exports = router
