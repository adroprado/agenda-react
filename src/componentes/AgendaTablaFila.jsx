const AgendaTablaFila = ({ el }) => {
  return (
    <tr className="plantilla">
      <td className="nombre contacto">{el.nombre}</td>
      <td className="telefono contacto">{el.telefono}</td>
      <td className="correo contacto">{el.correo}</td>
      <td>
        <input className="btn-editar btn" type="button" value="Editar" />
      </td>
      <td>
        <input className="btn-eliminar btn" type="button" value="Eliminar" />
      </td>
    </tr>
  );
};

export default AgendaTablaFila;
