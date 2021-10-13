import Express from 'express'

import { deleteUsuarios, getVendedores, getUsuarios, getAdministradores, patchUsuarios, postUsuarios } from '../controller/usuarioControllers.js';




const rutasUsuarios = Express.Router();



rutasUsuarios.route('/usuarios/vendedores').get((request,response)=>{
    getVendedores(response)
  })

rutasUsuarios.route('/usuarios/administradores').get((request,response)=>{
    getAdministradores(response)
  })

  rutasUsuarios.route('/usuarios').get((request,response)=>{
    getUsuarios(response)
  })
  
  
  rutasUsuarios.route('/usuarios/').post((request,response)=>{
    postUsuarios(request.body, response)
  })
  
  
  rutasUsuarios.route('/usuarios/:id/').patch((request,response)=>{
    const id = request.params.id
    patchUsuarios(id, request.body, response)
  })
  
  

  
  rutasUsuarios.route('/usuarios/:id/').delete((request,response)=>{
    const id = request.params.id
    deleteUsuarios(id, response)
  })




export default rutasUsuarios;