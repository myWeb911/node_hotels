const express = require('express');
const router = express.Router();

const menuItemsModel = require('../models/menu'); // Import the DB connection

// post method for menu
router.post('/', async (req, res) => {

    try {
        const data = req.body;  // Assuming the request body contains the menu data

        // create a new menu document using the Mongoose model
        const newMenuItem = new menuItemsModel(data);

        // save the new menu to the database
        const savedMenuItem = await newMenuItem.save();
        console.log("data saved");
        res.status(200).json(savedMenuItem);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
 })

// get method for menu
router.get('/', async (req, res) => {

    try {
        const data = await menuItemsModel.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }

})

// get method with parameter
// router.get('/:taste', async (req, res) => {

//   try {
    
//     const taste = req.params.taste;
//     if (taste == 'sweet' || taste == 'sour' || taste == 'spicy') {
//       const response = await menuItemsModel.find({ taste: taste });
//       console.log("data fetched");
//       res.status(200).json(response);
//     } 
//     else {
//       res.status(400).json({ error: 'Invalid taste type' });
//   } 
// }
//   catch (err) {
//     console.log(err);
//          res.status(500).json({ error: 'Internal server error' });
//   }

// })

module.exports = router;