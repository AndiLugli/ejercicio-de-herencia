class Persona {
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;

    this._apellido = apellido;

    this._edad = edad;

    this._idPersona = ++Persona.contadorPersonas;
  }

  get idPersona() {
    return this._idPersona;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  toString() {
    return (
      "N° de persona: " +
      this._idPersona +
      ", " +
      this._apellido +
      " " +
      this._nombre +
      ", " +
      this._edad +
      " años"
    );
  }
}

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
      super.toString() +
      ", n° de empleado: " +
      this._idEmpleado +
      ", sueldo: $" +
      this._sueldo
    );
  }
}

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
      super.toString() +
      ", n° de cliente: " +
      this._idCliente +
      ", Fecha de registro: " +
      this._fechaRegistro
    );
  }
}

//Variables de clase persona

let persona1 = new Persona("Juan", "Perez", 50);

console.log(persona1.toString());

let persona2 = new Persona("Lucas", "Troglio", 36);

console.log(persona2.toString());

//Variables de clase Empleado, heredando de clase Persona

let empleado1 = new Empleado("Laura", "Ruiz", 56, 500000);

console.log(empleado1.toString());

let empleado2 = new Empleado("Marcos", "Pais", 54, 380000);

console.log(empleado2.toString());

//Variables de clase Clientes, heredando de clase Persona

let cliente1 = new Cliente("Rosalia", "Crotti", 48, "04/01/1990");

console.log(cliente1.toString());

let cliente2 = new Cliente("Rosario", "Scholl", 44, "12/01/1990");

console.log(cliente2.toString());
