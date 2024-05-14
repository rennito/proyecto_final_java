const colors = ["#0000FF", "#87CEEB", "#FFFFFF"]; // Azul fuerte, azul claro y blanco
const colors1 = ["#010101", "#868687", "#FFFFFF"]; // Negro, Gris y Blanco
const colors2 = ["#7B241C", "#C0392B", "#E6B0AA"]; // Rojo oscuro, Rojo y Rosa claro
const btn = document.getElementById("btn");
const body = document.getElementById("body");
const header = document.getElementById("header");
const sidebar = document.getElementById("sidebar");
const color = document.querySelector(".color");

let colorIndex = 0; // Índice para controlar la secuencia de colores

btn.addEventListener("click", function () {
  if (colorIndex === 0) {
    // Asignar colores del primer conjunto
    body.style.backgroundColor = colors[2]; // Blanco
    header.style.backgroundColor = colors[0]; // Azul fuerte
    sidebar.style.backgroundColor = colors[1]; // Azul claro
    
  } else if (colorIndex === 1) {
    // Asignar colores del segundo conjunto
    body.style.backgroundColor = colors1[2]; // Negro
    header.style.backgroundColor = colors1[0]; // Gris
    sidebar.style.backgroundColor = colors1[1]; // Blanco
    
  } else if (colorIndex === 2) {
    // Asignar colores del tercer conjunto
    body.style.backgroundColor = colors2[2]; // Rojo oscuro
    header.style.backgroundColor = colors2[0]; // Rojo
    sidebar.style.backgroundColor = colors2[1]; // Rosa claro
    
  }

  // Incrementar el índice para la siguiente secuencia de colores
  colorIndex++;
  if (colorIndex >= 3) {
    colorIndex = 0; // Reiniciar el índice al llegar al final de la secuencia
  }
});

// Restaurar colores originales al hacer doble clic en el botón
btn.addEventListener("dblclick", function () {
  body.style.backgroundColor = "";
  header.style.backgroundColor = "";
  sidebar.style.backgroundColor = "";
  
});
