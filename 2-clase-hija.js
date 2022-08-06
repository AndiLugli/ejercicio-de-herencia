class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);

    this._sueldo = sueldo;

    this._idEmpleado = ++Empleado.contadorEmpleados;
  }

  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    this._sueldo;
  }

  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return (
      super.toString +
      ", n° de empleado: " +
      this._idEmpleado +
      ", sueldo: $" +
      this._sueldo
    );
  }
}
