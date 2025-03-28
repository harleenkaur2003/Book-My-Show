require('dotenv').config();  // Load environment variables

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;  // Use env variable
    if (!uri) {
      throw new Error('MONGO_URI is not defined in .env file');
    }
    
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  }
};

module.exports = connectDB;
