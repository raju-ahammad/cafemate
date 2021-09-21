require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const passport = require("passport");
const path = require('path')
var fs = require("fs");

const app = express();

// ***************** use middleware *****************

app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')));
app.use(cors())
app.use(cookieParser())

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./utils/passport")(passport);

app.use('/api', require('./routes/imageUploadRoute'))
app.use('/api/users', require('./routes/userRoute'))

// *************** connect mongodb **********************

const URI = process.env.MONGO_URI;


mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("connected to mongo db");
  
})

// Serve static assets if in production

    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
    
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})