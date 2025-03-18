const mongoose = require('mongoose');


// mongo db connection
const db_link = 'mongodb+srv://admin:i%23_d2h7p.VGVnx5@cluster0.hmgo1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

 
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
