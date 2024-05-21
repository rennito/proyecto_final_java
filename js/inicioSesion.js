document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío del formulario por defecto

      // Obtener los valores de los campos de usuario y contraseña
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Validar si los campos no están vacíos y contienen información válida (como en tu código actual)

      // Verificar si el usuario y la contraseña coinciden con los datos registrados
      const usuarioRegistrado = usuariosRegistrados.find(
        (user) => user.nuevoUsuario === username && user.nuevaContrasena === password
      );

      if (!usuarioRegistrado) {
        alert("Usuario o contraseña incorrectos. Por favor, verifique.");
        return; // Detener el proceso si el usuario o la contraseña son incorrectos
      }

      // Redirigir al usuario a la página del menú si la validación es exitosa
      window.location.href = "menu.html";
    });
  } else {
    console.error("El elemento 'loginForm' no se encontró en el DOM.");
  }
});
