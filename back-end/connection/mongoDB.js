const mongoose= require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path:'./.env'});


const connectionString= process.env.DATABASE_URL;

// conexión con MongoDB
mongoose.connect(connectionString)
  .then(() => {
    console.log("database connected")
  }).catch(err => {
    console.error(err)
  })