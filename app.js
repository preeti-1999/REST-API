const express=require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');




// Imports routes for the products
const product = require('./routes/product.route');

// initialize our express app
const app = express();



//setup mongoose connection
let dev_db_url = 'mongodb+srv://deypreeti:preeti9599@cluster0-ecmdf.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

//check if application is working
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
