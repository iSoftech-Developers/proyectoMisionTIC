const mongoose= require('mongoose');

const productoSchema = new mongoose.Schema({
    ids:String,
    field1:String,
    field2:Number,
    field3:Number,
    field4:String,
    field5:Boolean,
    field6:String,
    field7:String,
    
  });

  const Producto = mongoose.model('Producto',productoSchema);

  

  module.exports = Producto;