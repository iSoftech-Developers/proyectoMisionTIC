import React from 'react'

const EditarUsuarios = (props) => {
    return (
        <div className="w-1/5">
            <label for="productstatus">{props.formLabelTitle.label5}</label>
            <select required class=" w-full h-8 font-bold" name="productstatus">
                <option value="available">Disponible</option>
                <option value="notavailable">No disponible</option>
            </select>
        </div>
    );
}

export default EditarUsuarios;
