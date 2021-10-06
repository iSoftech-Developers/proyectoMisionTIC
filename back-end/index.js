require ('./mongo')
const Cliente = require('./models/cliente')
const Producto = require('./models/producto')
const Usuario = require('./models/usuario')
const express = require('express');
const cors = require('cors');
const app = express();



app.use(cors())



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
})

const PORT=3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

