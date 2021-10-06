const mongoose= require('mongoose');

const clienteSchema = new mongoose.Schema({
    ids:String, //id
    field1:String, // razon social
    field2:Number, // nit -cc
    field3:String, // email
    field4:String, // ciudad
    field5:String, // telefono
    field6:String, // depto
    field7:String, // direccion
    field8:String, // persona contacto
  });

  const Cliente = mongoose.model('Cliente',clienteSchema);

  module.exports = Cliente; 