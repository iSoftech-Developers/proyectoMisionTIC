const mongoose= require('mongoose');

const  connectionString= "mongodb+srv://interlude:Carlos15@cluster0.smza0.mongodb.net/Softech?retryWrites=true&w=majority"

// conexión con MongoDB
mongoose.connect(connectionString)
  .then(() => {
    console.log("database connected")
  }).catch(err => {
    console.error(err)
  })