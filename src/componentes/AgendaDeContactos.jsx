import { useState, useEffect } from "react";
import AgendaFormulario from "./AgendaFormulario";
import AgendaTabla from "./AgendaTabla";

const AgendaDeContactos = () => {
  const [listaDeContactosBD, setListaDeContactosBD] = useState([]);

  const ls = localStorage;

  useEffect(() => {
    const getContactos = JSON.parse(ls.getItem("contactos")) || [];
    setListaDeContactosBD(getContactos);
  }, []);

  useEffect(() => {
    ls.setItem("contactos", JSON.stringify(listaDeContactosBD));
  }, [listaDeContactosBD]);

  const crearContacto = (datos) => {
    console.log(datos);
    const nuevoContacto = { ...datos, id: Date.now() }; // Estableciendo un identificador único para los nuevos elementos
    console.log(nuevoContacto);
    setListaDeContactosBD([...listaDeContactosBD, nuevoContacto]); // Actualizamos el estado con la creación de un array nuevo, esto se logra con los contactos existentes, más los nuevos contactos que se agreguen.
  };

  return (
    <main>
      <AgendaFormulario crearContacto={crearContacto} />
      <AgendaTabla datos={listaDeContactosBD} />
    </main>
  );
};
export default AgendaDeContactos;
