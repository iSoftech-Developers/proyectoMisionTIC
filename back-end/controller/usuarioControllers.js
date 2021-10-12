import Usuario from "../models/usuario.js";


const getUsuarios= async(response)=>{
   await Usuario.find({}).then((usuarios)=>{
        response.json(usuarios)
      })
}

const postUsuarios = async(request, response)=>{
    const usuario = new Usuario({
        field1:request.nombre,
        field2:request.idusuario,
        field3:request.especialidad,
        field4:request.celular,
        field5:request.fechaingreso,
        field6:request.rol,
        field7:request.estado,
        ids:request.idusuario,
      })
     await  usuario.save()
      .then(() => {
        response.send(201)
      }).catch(err => {
        console.error(err)
      })
}

const patchUsuarios = async (id ,request,response)=>{
    await Usuario.findByIdAndUpdate(id, {
        field3:request.especialidad,
        field4:request.celular,
        field6:request.rol,
        field7:request.estado,
    })
      .then(() => {
        response.send(202)
      }).catch(err => {
        console.error(err)
      })
}

const deleteUsuarios  = async (id,response)=>{
    await Usuario.findByIdAndRemove(id)
    .then(() => {
      response.send(200)
    }).catch(err => {
      console.error(err)
    })
}


export {getUsuarios, postUsuarios, patchUsuarios, deleteUsuarios}
