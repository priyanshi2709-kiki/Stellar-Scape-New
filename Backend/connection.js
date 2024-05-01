const mongoose = require('mongoose');
const url = "mongodb+srv://Priyanshi:kittu2709@cluster0.0itplst.mongodb.net/StellarScape?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)

.then((result) => {
    console.log('Connected to the Database');  // shows that the DB is connected or else shows error
}).catch((err) => {  // showing error
    console.log(err)
});
module.exports = mongoose;
