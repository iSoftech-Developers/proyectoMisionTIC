const mongoose= require('mongoose');

const usuarioSchema = new mongoose.Schema({
    ids:String,
    field1:String,// nombre
    field2:String,// documento
    field3:String,// especialidad
    field4:String,// celular
    field5:Date,// fecha de ingreso
    field6:String,// rol
    field7:String,// estado
  });

  const Usuario = mongoose.model('Usuario',usuarioSchema);

  

  module.exports = Usuario;