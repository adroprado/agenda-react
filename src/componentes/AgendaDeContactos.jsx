import { useState } from "react";
import AgendaFormulario from "./AgendaFormulario";
import AgendaTabla from "./AgendaTabla";

const contactoInicial = { id: null, nombre: "", telefono: "", correo: "" };

const AgendaDeContactos = () => {
  const [contacto, setContacto] = useState(contactoInicial);
  const [listaDeContactosBD, setListaDeContactosBD] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("¡Enviando!");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
  };

  const handleChange = (e) => {
    setContacto({
      ...contacto,
      id: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <AgendaFormulario
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        contacto={contacto}
      />
      <AgendaTabla />
    </main>
  );
};
export default AgendaDeContactos;
