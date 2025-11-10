const AgendaFormulario = ({ handleSubmit, handleChange, contacto }) => {
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
      <input type="hidden" name="id" />
    </form>
  );
};

export default AgendaFormulario;
