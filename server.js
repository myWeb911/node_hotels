const express = require('express')
var bodyParser = require('body-parser')
const app = express();
const db = require('./db'); 
require('dotenv').config();

// middleware function
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;

 
// import the router files
const personRoutes = require('./routes/personRoutes'); 
const menuRoutes = require('./routes/menuRoutes');


// use the routers
app.use('/person', personRoutes); 
app.use('/menu', menuRoutes);

 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});








