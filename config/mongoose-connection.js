
const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017';

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

