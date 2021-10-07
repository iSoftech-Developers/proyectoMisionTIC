require ('./mongo')
const Cliente = require('./models/cliente')
const Producto = require('./models/producto')
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

  Cliente.find({}).then((clientes)=>{
    response.json(clientes)
  })
})

app.get('/productos/',(request,response)=>{

    Producto.find({}).then((productos)=>{
    response.json(productos)
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

const PORT=3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

