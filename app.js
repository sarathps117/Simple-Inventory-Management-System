const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const itemsRouter = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/inventory_db';

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Inventory API is Running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.use('/items', itemsRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found', message: 'Route does not exist' });
});

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    // still start server for local testing without DB
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (no DB)`));
  });

module.exports = app;
