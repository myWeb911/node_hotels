const express = require('express')
var bodyParser = require('body-parser')
const app = express();
const db = require('./db'); 


// middleware function
app.use(bodyParser.json())
app.listen(3000)

 
// import the router files
const personRoutes = require('./routes/personRoutes'); 
const menuRoutes = require('./routes/menuRoutes');


// use the routers
app.use('/person', personRoutes); 
app.use('/menu', menuRoutes);











