import React from 'react'


const DropDown = ({sorts,sorting})=> {
    return (
    <div className="ml-2 w-1/4 mt-6">
    <label for="userole"></label>
        <select value={sorts} onChange={sorting} required className="pl-2 w-full h-8 input-border text-gray-500" name="roleoptions">
            <option class="text-bold" value="usuarios" name="usuarios">Usuarios</option>
            <option class="text-bold" value="vendedor" name="vendedor">Vendedor</option>
            <option class="text-bold" value="administrador" name="administrador">Administrador</option>
        </select>
       
    </div>
    )
}

export default DropDown
