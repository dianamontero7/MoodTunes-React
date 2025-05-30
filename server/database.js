const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dianamontero38:OQkPRAQPf9fkFLLL@moodtunes.h9qgkzi.mongodb.net/MoodTunes?retryWrites=true&w=majority&appName=MoodTunes');
    console.log('MongoDB Atlas connected!');
  } catch (err) {
    console.error('Connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
