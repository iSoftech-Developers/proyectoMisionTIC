require ('./mongo')
const Cliente = require('./models/cliente')
const Producto = require('./models/producto')
const Usuario = require('./models/usuario')
const express = require('express');
const cors = require('cors');
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
//con el modelo anterior para q nos devuelva un resultado
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
  ids:request.body.ids,
})
    producto.save()
    .then(() => {
      response.send(201)
    }).catch(err => {
      console.error(err)
    })
})

app.post('/usuarios/nuevo',(request,response)=>{
  const usuario = new Usuario({
  field1:request.body.nombre,
  field2:request.body.idusuario,
  field3:request.body.especialidad,
  field4:request.body.celular,
  field5:request.body.fechaingreso,
  field6:request.body.rol,
  field7:request.body.estado,
  ids:request.body.idusuario,
})
usuario.save()
.then(() => {
  response.send(201)
}).catch(err => {
  console.log("hola")
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

app.delete('/producto/borrar/',(request,response)=>{
  const id = request.body.id
  Producto.findByIdAndRemove(id)
  .then(() => {
    response.send(200)
  }).catch(err => {
    console.error(err)
  })
})

app.delete('/cliente/borrar/',(request,response)=>{
  const id = request.body.id
  Cliente.findByIdAndRemove(id)
  .then(() => {
    response.send(200)
  }).catch(err => {
    console.error(err)
  })
})

app.delete('/vendedor/borrar/',(request,response)=>{
  const id = request.body.id
  Usuario.findByIdAndRemove(id)
  .then(() => {
    response.send(200)
  }).catch(err => {
    console.error(err)
  })
})

const PORT=3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

