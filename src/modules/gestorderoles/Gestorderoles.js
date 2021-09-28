import './Gestorderoles.css';

export const Gestorderoles = () => {
  return (
    <>
     <div class="drop-down">
        <select class="drop_items">
            <option class="usuarios_dropdown" value="Usuarios">Usuarios</option>
            <option value="vendedor">vendedor</option>
            <option value="administrador">administrador</option>
            <option value="ejecutivo">ejecutivo</option>
            <option value="operario">operario</option>
            <option value="director">director</option>
            <option value="gerente_comercial">gerente comercial</option>

        </select>
    </div>

    </>
  );
};
export default Gestorderoles;