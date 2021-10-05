const mongoose= require('mongoose');

const productoSchema = new mongoose.Schema({
    ids:Number,
    field1:String,
    field2:String,
    field3:Number,
    field4:String,
    field5:Boolean,
    field6:Number,
    
  });

  const Producto = mongoose.model('Producto',productoSchema);

  

  module.exports = Producto;