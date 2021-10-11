import Express from 'express'
import Usuario from '../models/usuario.js'




const rutasUsuarios = Express.Router();



rutasUsuarios.route('/usuarios/').get((request,response)=>{

    Usuario.find({}).then((usuarios)=>{
      response.json(usuarios)
    })
  })
  
  
  rutasUsuarios.route('/usuarios/').post((request,response)=>{
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
    console.error(err)
  })
  })
  
  
  rutasUsuarios.route('/usuarios/:id/').patch((request,response)=>{
    const id = request.params.id
    Usuario.findByIdAndUpdate(id, {
      field3:request.body.especialidad,
      field4:request.body.celular,
      field6:request.body.rol,
      field7:request.body.estado,
  })
    .then(() => {
      response.send(202)
    }).catch(err => {
      console.error(err)
    })
  })
  
  

  
  rutasUsuarios.route('/usuarios/:id/').delete((request,response)=>{
    const id = request.params.id
    Usuario.findByIdAndRemove(id)
    .then(() => {
      response.send(200)
    }).catch(err => {
      console.error(err)
    })
  })




export default rutasUsuarios;