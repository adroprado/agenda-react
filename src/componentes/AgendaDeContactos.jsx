import { useState, useEffect } from "react";
import AgendaFormulario from "./AgendaFormulario";
import AgendaTabla from "./AgendaTabla";

const AgendaDeContactos = () => {
  const [listaDeContactosBD, setListaDeContactosBD] = useState([]);
  const [datosParaEditar, setDatosParaEditar] = useState(null); //null- realizamos inserción. true - realizamos actualización.

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

  const actualizarContacto = (datos) => {
    const contactoEditado = listaDeContactosBD.map((el) =>
      el.id === datos.id ? datos : el
    ); //Si coincide el id, que establezca la nueva información, de lo contrario, se mantenga igual
    setListaDeContactosBD(contactoEditado); //Actualizamos la base de datos con la nueva información.
  };

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
