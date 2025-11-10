const AgendaTablaFila = () => {
  return (
    <template className="plantilla">
      <tr>
        <td className="nombre contacto"></td>
        <td className="telefono contacto"></td>
        <td className="correo contacto"></td>
        <td>
          <input className="btn-editar btn" type="button" value="Editar" />
        </td>
        <td>
          <input className="btn-eliminar btn" type="button" value="Eliminar" />
        </td>
      </tr>
    </template>
  );
};

export default AgendaTablaFila; // Importar y renderizar en el componente AgendaTabla
