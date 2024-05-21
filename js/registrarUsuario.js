// Array para almacenar los usuarios registrados
const usuariosRegistrados = [];

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto

      // Obtener los valores del formulario de registro
      const nombreCompleto = document.getElementById("nombreCompleto").value;
      const puesto = document.getElementById("puesto").value;
      const cumpleanos = document.getElementById("cumpleanos").value;
      const nuevoUsuario = document.getElementById("nuevoUsuario").value;
      const nuevaContrasena = document.getElementById("nuevaContrasena").value;

      // Crear un objeto con los datos del usuario registrado
      const userData = {
        nombreCompleto: nombreCompleto,
        puesto: puesto,
        cumpleanos: cumpleanos,
        nuevoUsuario: nuevoUsuario,
        nuevaContrasena: nuevaContrasena,
      };

      // Almacenar los datos del usuario en el array de usuarios registrados
      usuariosRegistrados.push(userData);

      // Mostrar los datos del usuario en la consola (opcional)
      console.log("Datos del usuario registrado:", userData);

      // Limpiar los campos del formulario después del registro (opcional)
      registerForm.reset();
    });
  } else {
    console.error("El elemento 'registerForm' no se encontró en el DOM.");
  }
});
