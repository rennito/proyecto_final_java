// Función para cargar los datos de los empleados en la tabla
function cargarDatos() {
  // Obtener el cuerpo de la tabla donde se mostrarán los empleados
  const personalTable = document
    .getElementById("personalTable")
    .getElementsByTagName("tbody")[0];

  // Iterar sobre la lista de empleados para crear filas en la tabla
  empleados.forEach((empleado) => {
    // Crear una nueva fila para cada empleado
    const row = document.createElement("tr");

    // Iterar sobre las propiedades de cada empleado
    for (const prop in empleado) {
      // Excluir ciertas propiedades como "password", "codigoPostal", etc.
      if (
        prop !== "password" &&
        prop !== "codigoPostal" &&
        prop !== "numEmpleado" &&
        prop !== "fechaNacimiento" &&
        prop !== "genero" &&
        prop !== "tipoNomina" &&
        prop !== "rfc" &&
        prop !== "estadoCivil" &&
        prop !== "profesion" &&
        prop !== "puesto" &&
        prop !== "email"
      ) {
        // Crear una celda para cada propiedad y asignarle el contenido
        const cell = document.createElement("td");
        cell.textContent = empleado[prop];
        row.appendChild(cell);
      }
    }

    // Crear una celda para el botón "Ver Más"
    const detailsCell = document.createElement("td");
    // Crear el botón "Ver Más" y asignarle eventos
    const expandBtn = document.createElement("button");
    expandBtn.textContent = "Ver Más";
    expandBtn.classList.add("expand-btn");
    expandBtn.addEventListener("click", function () {
      // Verificar si el botón está abierto o cerrado
      const isOpen = this.classList.contains("open");
      // Crear una nueva fila para los detalles adicionales del empleado
      const detailsRow = document.createElement("tr");
      detailsRow.classList.add("details-row");
      // Crear una celda para los detalles y asignarle el colspan
      const detailsCell = document.createElement("td");
      detailsCell.colSpan = 7;
      // Mostrar u ocultar los detalles según el estado del botón
      if (!isOpen) {
        // Mostrar los detalles adicionales del empleado
        detailsCell.innerHTML = `
                    <p><strong>Código Postal:</strong> ${empleado.codigoPostal}</p>
                    <p><strong>Número de Empleado:</strong> ${empleado.numEmpleado}</p>
                    <p><strong>Fecha de Nacimiento:</strong> ${empleado.fechaNacimiento}</p>
                    <p><strong>Género:</strong> ${empleado.genero}</p>
                    <p><strong>Tipo de Nómina:</strong> ${empleado.tipoNomina}</p>
                    <p><strong>RFC:</strong> ${empleado.rfc}</p>
                    <p><strong>Estado Civil:</strong> ${empleado.estadoCivil}</p>
                    <p><strong>Profesión:</strong> ${empleado.profesion}</p>
                    <p><strong>Puesto:</strong> ${empleado.puesto}</p>
                    <p><strong>Correo:</strong> ${empleado.email}</p>
                `;
        // Agregar los detalles a la fila y cambiar el texto del botón
        detailsRow.appendChild(detailsCell);
        row.after(detailsRow);
        expandBtn.textContent = "Ver Menos";
        expandBtn.classList.add("open");
      } else {
        // Ocultar los detalles y restaurar el texto del botón
        const detailsRow = document.querySelector(".details-row");
        detailsRow.remove();
        expandBtn.textContent = "Ver Más";
        expandBtn.classList.remove("open");
      }
    });

    // Agregar el botón "Ver Más" a la celda de detalles y la celda a la fila
    detailsCell.appendChild(expandBtn);
    row.appendChild(detailsCell);

    // Agregar la fila a la tabla
    personalTable.appendChild(row);
  });
}

// Llamar a la función para cargar los datos al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  cargarDatos();
});
