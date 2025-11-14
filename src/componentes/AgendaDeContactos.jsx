import { useState, useEffect } from "react";
import AgendaFormulario from "./AgendaFormulario";
import AgendaTabla from "./AgendaTabla";

// === 1. Función de Inicialización (Lectura) ===
// Esta función se ejecuta UNA SOLA VEZ antes del primer renderizado.
const inicializarContactosLS = () => {
  const ls = localStorage;
  const contactosGuardados = ls.getItem("contactos");

  // Si hay datos en localStorage, los parsea. Si no hay (es null), devuelve un array vacío.
  return JSON.parse(contactosGuardados) || [];
};

const AgendaDeContactos = () => {
  // === 2. Uso de useState con Inicializador Perezoso ===
  // Llama a inicializarContactosLS solo al montar el componente.
  const [listaDeContactosBD, setListaDeContactosBD] = useState(
    inicializarContactosLS
  );
  const [datosParaEditar, setDatosParaEditar] = useState(null); //null: realizamos inserción. true: realizamos actualización.

  const ls = localStorage;

  // --- Renderiza en el localStorage nuestra lista de contactos, cada vez que agregamos, editamos o eliminamos un contacto ---
  useEffect(() => {
    ls.setItem("contactos", JSON.stringify(listaDeContactosBD));
  }, [listaDeContactosBD]);

  // --- Función que maneja la lógica de creación de un contacto ---
  const crearContacto = (datos) => {
    console.log(datos);
    const nuevoContacto = { ...datos, id: Date.now() }; // Estableciendo un identificador único para los nuevos elementos
    console.log(nuevoContacto);
    setListaDeContactosBD([...listaDeContactosBD, nuevoContacto]); // Actualizamos el estado con la creación de un array nuevo, esto se logra con los contactos existentes, más los nuevos contactos que se agreguen.
  };

  // --- Función que maneja la lógica de edición de un contacto ---
  const actualizarContacto = (datos) => {
    const contactoEditado = listaDeContactosBD.map((el) =>
      el.id === datos.id ? datos : el
    ); //Si coincide el id, que establezca la nueva información, de lo contrario, se mantenga igual
    setListaDeContactosBD(contactoEditado); //Actualizamos la base de datos con la nueva información.
  };

  // --- Función que maneja la lógica de eliminación de un contacto ---
  const eliminarContacto = (id) => {
    if (id) {
      let contactoEliminado = listaDeContactosBD.filter((el) => el.id !== id); // Filtramos nuestra base de datos, quitando elelemento en cuestión
      setListaDeContactosBD(contactoEliminado); // Actualizamos nuestra base de datos
    } else {
      return;
    }
  };

  return (
    <main>
      <AgendaFormulario
        crearContacto={crearContacto}
        actualizarContacto={actualizarContacto}
        datosParaEditar={datosParaEditar}
        setDatosParaEditar={setDatosParaEditar}
      />
      <AgendaTabla
        datos={listaDeContactosBD}
        setDatosParaEditar={setDatosParaEditar}
        eliminarContacto={eliminarContacto}
      />
    </main>
  );
};
export default AgendaDeContactos;
