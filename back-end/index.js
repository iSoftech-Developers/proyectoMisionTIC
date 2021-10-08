require ('./mongo')
const Cliente = require('./models/cliente')
const Producto = require('./models/producto')
const Usuario = require('./models/usuario')
const express = require('express');
const cors = require('cors');
const { Card } = require('@material-ui/core');
const { request, response } = require('express');
const app = express();



app.use(cors())
app.use(express.json())



  // Cliente.find({}).then((result)=>{
  //   console.log(result)
  //   mongoose.connection.close();
  // }).catch(err => {
  //   console.error(err)
  // })
  
// const app= http.createServer((request,response)=>{

//     response.writeHead(200,{'Content-Type': 'application/json'})
//     response.end(JSON.stringify(clientes))

// })


app.get('/',(request,response)=>{

    response.send("Hello World")

})

app.get('/clientes/',(request,response)=>{

  Cliente.find({}).then((clientes)=>{
    response.json(clientes)
  })
})

app.get('/productos/',(request,response)=>{

    Producto.find({}).then((productos)=>{
    response.json(productos)
  })
})

app.get('/usuarios/',(request,response)=>{
 
  Usuario.find({}).then((usuarios)=>{
    response.json(usuarios)
  })
})

app.post('/clientes/nuevo',(request,response)=>{
    const cliente = new Cliente({
    field1:request.body.nombrecliente,
    field2:request.body.idcliente,
    field3:request.body.email,
    field4:request.body.ciudad,
    field5:request.body.telefono,
    field6:request.body.departamento,
    field7:request.body.direccion,
    field8:request.body.personacontacto,
    ids:request.body.idcliente,
  })
  cliente.save()
  .then(() => {
    response.send(201)
  }).catch(err => {
    console.error(err)
  })
})

app.post('/productos/nuevo',(request,response)=>{
  const producto = new Producto({
  field1:request.body.descripcion,
  field2:request.body.valorunitario,
  field3:request.body.cantidad,
  field4:request.body.talla,
  field5:request.body.estado,
  field6:request.body.genero,
  field7:request.body.color,
  ids:request.body.descripcion,
})
producto.save()
.then(() => {
  response.send(201)
}).catch(err => {
  console.error(err)
})
})



app.patch('/clientes/actualizar',(request,response)=>{
  const producto = new Producto({
  field1:request.body.descripcion,
  field2:request.body.valorunitario,
  field3:request.body.cantidad,
  field4:request.body.talla,
  field5:request.body.estado,
  field6:request.body.genero,
  field7:request.body.color,
  ids:request.body.descripcion,
})
producto.save()
.then(() => {
  response.send(201)
}).catch(err => {
  console.error(err)
})
})

/*app.delete('/productos/eliminar', (request,response)=>{
  const {id} = request.params;
  try{
    const deleteProducto= Producto.findByIdAndDelete(id);
    request.status(201).json(deleteProducto);
  } catch (error){
    request.status(400);
  }
});*/


const PORT=3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

