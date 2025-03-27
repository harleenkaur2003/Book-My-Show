const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://harleen9355:harleen2003@cluster0.ufpru9s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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
