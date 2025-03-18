const mongoose = require('mongoose');
require('dotenv').config();

// mongo db connection
const db_link = process.env.DB_URL;

 
mongoose.connect(db_link)
.then(function (db) {
    // console.log(db);
    console.log('db connected');
})
.catch(function (err) {
    console.log(err);
});

// export the database connection
module.exports = mongoose;
