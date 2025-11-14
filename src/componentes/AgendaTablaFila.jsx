const AgendaTablaFila = ({ el, setDatosParaEditar, eliminarContacto }) => {
  return (
    <tr className="plantilla">
      <td className="nombre contacto">{el.nombre}</td>
      <td className="telefono contacto">{el.telefono}</td>
      <td className="correo contacto">{el.correo}</td>
      <td>
        <input
          className="btn-editar btn"
          type="button"
          value="Editar"
          onClick={() => setDatosParaEditar(el)} // En el evento click enviamos como parámetro, los datos del contacto a editar/actualizar, a través de la función que actualiza la variable de estado "datosParaEditar"
        />
      </td>
      <td>
        <input
          className="btn-eliminar btn"
          type="button"
          value="Eliminar"
          onClick={() => eliminarContacto(el.id)} // En el evento click enviamos como parámetro, el id del contacto a eliminar, a través de la función "eliminarContacto"
        />
      </td>
    </tr>
  );
};

export default AgendaTablaFila;
