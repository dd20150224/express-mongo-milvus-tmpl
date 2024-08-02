const express = require('express');

const dotenv = require('dotenv');
dotenv.config()

const cors = require('cors');
const routes = require('./routes');

// Connect to MongoDB
const mongoose = require('mongoose');
console.log(`MongoDB URL = ${process.env.MONGODB_URL}`)
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

// Connect to Milvus
const milvusClient = require('./config/milvus');

const app = express()
app.use(cors());

app.use(routes);

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
