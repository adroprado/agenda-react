const AgendaFormulario = () => {
  return (
    <form className="formulario" autoComplete="off">
      <a href="https://github.com/adroprado/agenda-react" target="_blank">
        <img src="/src/assets/github.svg" alt="Github" />
      </a>
      <h1>Agregar contacto</h1>
      <input
        className="nombre"
        type="text"
        name="nombre"
        placeholder="Nombre"
      />
      <input
        className="telefono"
        type="tel"
        name="telefono"
        placeholder="Número teléfono"
      />
      <input
        className="correo"
        type="email"
        name="correo"
        placeholder="Correo"
      />
      <input type="submit" value="Agregar" />
      <input type="hidden" name="id" />
    </form>
  );
};

export default AgendaFormulario;
