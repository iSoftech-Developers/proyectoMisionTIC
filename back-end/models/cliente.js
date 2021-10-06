const mongoose= require('mongoose');

const clienteSchema = new mongoose.Schema({
    ids:String,
    field1:String,
    field2:Number,
    field3:String,
    field4:String,
    field5:String,
    field6:String,
    field7:String,
    field8:String,
  });

  const Cliente = mongoose.model('Cliente',clienteSchema);

  module.exports = Cliente; 