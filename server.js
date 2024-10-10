const express = require('express');
const colors = require('colors');
const morgon =  require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors'); 
const doctorRoutes = require('./routes/doctorRoutes'); 


//Dushan 

const user_routes = require('./routes/userRoutes');

//dotenv config

dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();


//middlewares
app.use(express.json());
app.use(morgon('dev'));

// Use CORS
app.use(cors()); // Enable CORS for all routes

//routes
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/user', user_routes );

app.use('/api/doctors', doctorRoutes);

//port

const port = process.env.PORT || 8050

//listen port

app.listen(port, () =>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}` 
        .bgCyan.white
        
    );
})




