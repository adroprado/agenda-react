import { useState } from "react";
import AgendaFormulario from "./AgendaFormulario";
import AgendaTabla from "./AgendaTabla";

const AgendaDeContactos = () => {
  const [listaDeContactosBD, setListaDeContactosBD] = useState([]);

  const crearContacto = (datos) => {
    console.log(datos);
    datos.id = Date.now(); // Estableciendo un identificador único para los nuevos elementos
    setListaDeContactosBD([...listaDeContactosBD, datos]); // Actualizamos el estado con la creación de un array nuevo, esto se logra con los contactos existentes, más los nuevos contactos que se agreguen.
  };

  return (
    <main>
      <AgendaFormulario crearContacto={crearContacto} />
      <AgendaTabla datos={listaDeContactosBD} />
    </main>
  );
};
export default AgendaDeContactos;
