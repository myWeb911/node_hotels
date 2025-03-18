const express = require('express');
const router = express.Router();
const personModel = require('../models/person');  // Import the DB connection

// post method to send data from frontend to backend
router.post('/', async (req, res) => {

    try {
        const data = req.body;  // Assuming the request body contains the person data

        // create a new person document using the Mongoose model
        const newPerson = new personModel(data);

        // save the new person to the database
        const savedPerson = await newPerson.save();
        console.log("data saved");
        res.status(200).json(savedPerson);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }

})

// get method to get the person data from the database
router.get('/', async (req, res) => {

    try {
        const data = await personModel.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }

})


// get method with parameter
router.get('/:workType', async (req, res) => {

    try {
     const workType = req.params.workType;
     if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
         const response = await personModel.find({ work: workType });
         console.log("data fetched");
         res.status(200).json(response);
     } 
     else {
         res.status(400).json({ error: 'Invalid work type' });
     }
    } 
    catch (err) {
     console.log(err);
         res.status(500).json({ error: 'Internal server error' });
    }
 
 })


//  put method to update the person data
router.put('/:id', async (req, res) => {

    try {
        const id = req.params.id;  // exract the id from the URL parameter
        const data = req.body;     // extrac the updated data from the request body

        const updatedPerson = await personModel.findByIdAndUpdate(id, data,{
            new: true, // return the updated document
            runValidators: true // run the model validation
        })

if (!updatedPerson) {
    return res.status(404).json({ error: 'Person not found' });
}

        console.log("data updated");
        res.status(200).json(updatedPerson);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }

})


// delete method
router.delete('/:id', async (req, res) => {

    try {
        const id = req.params.id;  // extract the id from the URL parameter

        const deletedPerson = await personModel.findByIdAndDelete(id);

        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log("data deleted");
        res.status(200).json(deletedPerson);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    } 

})

 module.exports = router;

//  hell how are you