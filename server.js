require('dotenv').config()

const express = require('express');
const cors = require('cors');
const puerto = process.env.PUERTO;
const app = express();
require('./config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/person.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})