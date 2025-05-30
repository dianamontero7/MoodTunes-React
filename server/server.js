const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5050;


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));



const moodSchema = new mongoose.Schema({
  id: String,
  mood: String,
  title: String,
  artist: String,
  youtube_url: String
});

const Mood= mongoose.model('Mood', moodSchema, 'moods');

  
app.get('/moods', async (req, res) => {
    try {
      const moods = await Mood.find();
      console.log('Fetched moods:', moods); 
      res.json(moods);
    } catch (err) {
      console.error('Failed to fetch moods:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });  


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




