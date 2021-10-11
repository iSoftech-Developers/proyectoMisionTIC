import Express from 'express'
import Cliente from '../models/cliente.js';




const rutasClientes = Express.Router();

rutasClientes.route('/clientes/').post((request,response)=>{
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



rutasClientes.route('/clientes/').get((request,response)=>{
    //con el modelo anterior para q nos devuelva un resultado
      Cliente.find({}).then((clientes)=>{
        response.json(clientes)
      })
      .then(() => {
        response.send(201)
      }).catch(err => {
        console.error(err)
      })
    })


rutasClientes.route('/clientes/:id/').patch((request,response)=>{
        const id = request.params.id
        Cliente.findByIdAndUpdate(id, {
          field3:request.body.email,
          field4:request.body.ciudad,
          field5:request.body.telefono,
          field6:request.body.departamento,
          field7:request.body.direccion,
          field8:request.body.personacontacto,
      })
        .then(() => {
          response.send(202)
        }).catch(err => {
          console.error(err)
        })
    })

    rutasClientes.route('/clientes/:id/').delete((request,response)=>{
        const id = request.params.id
        Cliente.findByIdAndRemove(id)
        .then(() => {
          response.send(200)
        }).catch(err => {
          console.error(err)
        })
      })

export default rutasClientes;