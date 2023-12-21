const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const bodyParser = require("body-parser");
const UserProfile = require('./models/UserProfile');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


let userData = {};


// Update the login route in your authentication logic
// Example:
app.post('/api/auth/login', async (req, res) => {
  try {
    // Your existing login logic here...

    // Fetch user profile data after successful login
    const userProfile = await UserProfile.findOne({ email: req.body.email });

    if (userProfile) {
      console.log('User profile fetched successfully on login:', userProfile);
      userData = userProfile;
    }

    // Send a response indicating successful login
    res.status(200).json({ message: 'Login successful', user: userProfile });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
