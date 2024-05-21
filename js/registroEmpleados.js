// Definir un array para almacenar los empleados registrados
const empleadosRegistrados = [];

// Función para registrar un nuevo empleado
function registrarEmpleado() {
  // Obtener el estado del checkbox de aceptar términos y condiciones
  const aceptarCondiciones = document.getElementById("gridCheck").checked;

  // Obtener los valores de los campos del formulario de registro
  const nombre = document.getElementById("inputNombre").value;
  const apellidoPaterno = document.getElementById("inputApellidoPaterno").value;
  const apellidoMaterno = document.getElementById("inputApellidoMaterno").value;
  const direccion = document.getElementById("inputAddress").value;
  const ciudad = document.getElementById("inputCity").value;
  const estado = document.getElementById("inputState").value;
  const codigoPostal = document.getElementById("inputZip").value;
  const numEmpleado = document.getElementById("numEmpleado").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const genero = document.getElementById("genero").value;
  const tipoNomina = document.getElementById("tipoNomina").value;
  const rfc = document.getElementById("rfc").value;
  const estadoCivil = document.getElementById("estadoCivil").value;
  const profesion = document.getElementById("profesion").value;
  const puesto = document.getElementById("puesto").value;
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  // Validar que todos los campos estén completos y las condiciones aceptadas
  if (
    nombre.trim() === "" ||
    apellidoPaterno.trim() === "" ||
    apellidoMaterno.trim() === "" ||
    direccion.trim() === "" ||
    ciudad.trim() === "" ||
    estado.trim() === "" ||
    codigoPostal.trim() === "" ||
    numEmpleado.trim() === "" ||
    fechaNacimiento.trim() === "" ||
    genero.trim() === "" ||
    tipoNomina.trim() === "" ||
    rfc.trim() === "" ||
    estadoCivil.trim() === "" ||
    profesion.trim() === "" ||
    puesto.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    !aceptarCondiciones
  ) {
    alert("Por favor completa todos los campos y acepta los términos y condiciones.");
    return; // Salir de la función si algún campo está incompleto o las condiciones no están aceptadas
  }
  
  // Crear un objeto con los datos del nuevo empleado
  const nuevoEmpleado = {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    direccion,
    ciudad,
    estado,
    codigoPostal,
    numEmpleado,
    fechaNacimiento,
    genero,
    tipoNomina,
    rfc,
    estadoCivil,
    profesion,
    puesto,
    email,
    password,
  };

  // Agregar el nuevo empleado al array de empleados registrados
  empleadosRegistrados.push(nuevoEmpleado);

  // Mostrar mensaje de éxito
  alert("Empleado registrado exitosamente.");

  // Limpiar los campos del formulario después de registrar
  document.getElementById("registroForm").reset();

  // Mostrar los empleados registrados en la consola (opcional)
  console.log("Empleados registrados:", empleadosRegistrados);
}

// Evento al enviar el formulario de registro
document.getElementById("registroForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío por defecto del formulario
  registrarEmpleado(); // Llamar a la función para registrar el empleado
});

// Función para listar los empleados registrados
function listaEmpleadosRegistrados() {
  // Verificar si hay empleados registrados
  if (empleadosRegistrados.length === 0) {
    console.log("No hay empleados registrados.");
    return;
  }

  // Mostrar la lista de empleados registrados
  console.log("Empleados registrados:");
  empleadosRegistrados.forEach((empleado, index) => {
    console.log(`Empleado ${index + 1}:`);
    console.log("Nombre:", empleado.nombre);
    console.log("Apellido Paterno:", empleado.apellidoPaterno);
    console.log("Apellido Materno:", empleado.apellidoMaterno);
    console.log("Dirección:", empleado.direccion);
    console.log("Ciudad:", empleado.ciudad);
    console.log("Estado:", empleado.estado);
    console.log("Código Postal:", empleado.codigoPostal);
    console.log("Número de Empleado:", empleado.numEmpleado);
    console.log("Fecha de Nacimiento:", empleado.fechaNacimiento);
    console.log("Género:", empleado.genero);
    console.log("Tipo de Nómina:", empleado.tipoNomina);
    console.log("RFC:", empleado.rfc);
    console.log("Estado Civil:", empleado.estadoCivil);
    console.log("Profesión:", empleado.profesion);
    console.log("Puesto:", empleado.puesto);
    console.log("Email:", empleado.email);
    console.log("Contraseña:", empleado.password);
    console.log("--------------------");
  });
}

// Llamar a la función para listar empleados registrados (puedes llamarla en cualquier momento)
listaEmpleadosRegistrados();
