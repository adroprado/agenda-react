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
          onClick={() => setDatosParaEditar(el)}
        />
      </td>
      <td>
        <input
          className="btn-eliminar btn"
          type="button"
          value="Eliminar"
          onClick={() => eliminarContacto(el.id)}
        />
      </td>
    </tr>
  );
};

export default AgendaTablaFila;
