const mongoose= require('mongoose');

const usuarioSchema = new mongoose.Schema({
    ids:String,
    field2:String,
    field3:String,
    field4:Number,
    field5:String,
    
  });

  const Usuario = mongoose.model('Usuario',usuarioSchema);

  

  module.exports = Usuario;