class Cliente extends Persona {
  static contadorClientes = 0;

  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);

    this._fechaRegistro = fechaRegistro;

    this._idCliente = ++Cliente.contadorClientes;
  }

  get idCliente() {
    return this._idCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return (
      super.toString +
      "n° de cliente: " +
      this._idCliente +
      ",Fecha de registro: " +
      this._fechaRegistro
    );
  }
}
