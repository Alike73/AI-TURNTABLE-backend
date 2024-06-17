
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const soundsRoutes = require('./vinyl-sounds-backend/SoundsRoutes');
const adminRoutes = require('./admin-backend/AdminRoutes');
const musicCategoryRoutes = require('./music-category-backend/MusicCategoryRoutes');

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

// Username:  alimzhanislaAITurntable
// Password:   zNSDm0TFTvUqK7Xk
// Link:       mongodb+srv://alimzhanislaAITurntable:zNSDm0TFTvUqK7Xk@cluster0.89qcjep.mongodb.net/AITurntable?retryWrites=true&w=majority&appName=Cluster0