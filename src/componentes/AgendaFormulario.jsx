import { useState, useEffect } from "react";

// Objeto inicial del contacto
const contactoInicial = { id: null, nombre: "", telefono: "", correo: "" };

const AgendaFormulario = ({
  crearContacto,
  actualizarContacto,
  datosParaEditar,
  setDatosParaEditar,
}) => {
  const [contacto, setContacto] = useState(contactoInicial);

  // --- Vigila la prop datosParaEditar. Cuando esta cambia, rellena el estado local contacto para que los inputs muestren la información a editar. ---

  useEffect(() => {
    if (datosParaEditar) {
      setContacto(datosParaEditar);
    } else {
      setContacto(contactoInicial);
    }
  }, [datosParaEditar]);

  // --- Detecta las pulsaciones del teclado. Y actualiza el estado del contacto con el valor del input, usando el operador de propagación (...) ---
  const handleChange = (e) => {
    setContacto({
      ...contacto,
      [e.target.name]: e.target.value,
    });
  };

  // --- Se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // previene los efectos por defecto

    // Sencilla validación que verifica los campos del formulario, no estén vacíos.
    if (!contacto.nombre || !contacto.telefono || !contacto.correo) {
      alert("Datos incompletos"); // Mensaje para el usuario
      return;
    }
    // Dependiendo del valor que tenga la propiedad id, debe llamar a nuestra función de crear o editar un contacto.
    if (contacto.id === null) {
      crearContacto(contacto); // Crea nuevo registro
    } else {
      actualizarContacto(contacto); // Actualizar registro
    }
    reiniciarFormulario(); // Llamndo función de limpieza de formulario
  };

  // Función que maneja la limpieza del formulario al añadir o editar un elemento. Y
  const reiniciarFormulario = () => {
    setContacto(contactoInicial); // El formulario queda vacío al actualizar la función "setContacto", nuevamente con el valor inicial "contactoInicial"
    setDatosParaEditar(null);
  };

  return (
    <form className="formulario" autoComplete="off" onSubmit={handleSubmit}>
      <a href="https://github.com/adroprado/agenda-react" target="_blank">
        <img src="/src/assets/github.svg" alt="Github" />
      </a>
      <h1>Agregar contacto</h1>
      <input
        className="nombre"
        type="text"
        name="nombre"
        value={contacto.nombre}
        placeholder="Nombre"
        onChange={handleChange}
      />
      <input
        className="telefono"
        type="tel"
        name="telefono"
        value={contacto.telefono}
        placeholder="Número teléfono"
        onChange={handleChange}
      />
      <input
        className="correo"
        type="email"
        name="correo"
        value={contacto.correo}
        placeholder="Correo"
        onChange={handleChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
};

export default AgendaFormulario;
