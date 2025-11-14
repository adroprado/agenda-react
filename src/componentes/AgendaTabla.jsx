import AgendaTablaFila from "./AgendaTablaFila";

const AgendaTabla = ({ datos, setDatosParaEditar }) => {
  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((el) => (
            <AgendaTablaFila
              key={el.id}
              el={el}
              setDatosParaEditar={setDatosParaEditar}
            />
          ))
        ) : (
          <tr>
            <td colSpan="4">Sin datos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AgendaTabla;
