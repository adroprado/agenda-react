import { useState, useEffect } from "react";

const contactoInicial = { id: null, nombre: "", telefono: "", correo: "" };

const AgendaFormulario = ({
  crearContacto,
  actualizarContacto,
  datosParaEditar,
  setDatosParaEditar,
}) => {
  const [contacto, setContacto] = useState(contactoInicial);

  useEffect(() => {
    if (datosParaEditar) {
      setContacto(datosParaEditar);
    } else {
      setContacto(contactoInicial);
    }
  }, [datosParaEditar]);

  const handleChange = (e) => {
    setContacto({
      ...contacto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sencilla validación que verifica los campos del formulario, no estén vacíos.
    if (!contacto.nombre || !contacto.telefono || !contacto.correo) {
      alert("Datos incompletos"); // Mensaje para el usuario
      return;
    }

    if (contacto.id === null) {
      crearContacto(contacto); // Crea nuevo registro
    } else {
      // Actualizar registro
      actualizarContacto(contacto);
    }
    reiniciarFormulario();
  };

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
