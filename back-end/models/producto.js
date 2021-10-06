const mongoose= require('mongoose');

const productoSchema = new mongoose.Schema({
    ids:String, // id
    field1:String, // descripcion
    field2:Number, // valor unitario
    field3:Number, // stock
    field4:String, // talla
    field5:Boolean, // estado
    field6:String, // genero
    field7:String, // color
    
  });

  const Producto = mongoose.model('Producto',productoSchema);

  

  module.exports = Producto;