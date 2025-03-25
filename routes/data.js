
const express = require('express');
const router = express.Router();
const DataEntry = require('../models/DataEntry');

// Counter for tracking requests
let requestCount = 0;

// Get data
router.get('/data', async (req, res) => {
  try {
    // Increment request counter
    requestCount++;
    
    // Create a new data entry
    const dataEntry = new DataEntry({
      message: 'Hello from the backend!',
      timestamp: new Date(),
      count: requestCount
    });
    
    // Save to database
    await dataEntry.save();
    
    // Return the data
    res.status(200).json({
      message: 'Hello from the backend!',
      timestamp: new Date(),
      count: requestCount
    });
  } catch (error) {
    console.error('Error handling data request:', error);
    res.status(500).json({ message: 'Error retrieving data', error: error.message });
  }
});

module.exports = router;
