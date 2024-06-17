
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const soundsRoutes = require('./SoundsRoutes');
const adminRoutes = require('./AdminRoutes');
const musicCategoryRoutes = require('./MusicCategoryRoutes');

mongoose.set('strictQuery', false);
require('dotenv').config();

const PORT = 8000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("WE ARE CONNECTED TO MONGO!"))
.catch((err) => console.log("ERROR!"))


app.use(adminRoutes)
app.use(soundsRoutes)
app.use(musicCategoryRoutes)

app.listen(PORT, () => {
    console.log(`Your server is running at PORT: ${PORT}!`)
})
