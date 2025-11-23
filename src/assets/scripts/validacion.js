document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactoForm");

  form.addEventListener("submit", function (event) {
    let valido = true;

    // Limpia errores previos
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-mensaje").textContent = "";

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Valida nombre
    if (nombre.length < 3) {
      document.getElementById("error-nombre").textContent =
        "El nombre debe tener al menos 3 caracteres.";
      valido = false;
    }

    // Valida email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("error-email").textContent =
        "Introduce un correo electrónico válido.";
      valido = false;
    }

    // Valida mensaje
    if (mensaje.length < 10) {
      document.getElementById("error-mensaje").textContent =
        "El mensaje debe tener al menos 10 caracteres.";
      valido = false;
    }

    if (!valido) {
      event.preventDefault(); 
    } else {
      event.preventDefault(); 
      document.getElementById("mensaje-confirmacion").style.display = "block"; // Muestra el mensaje
      form.reset(); // Limpia el formulario
    }
  });
});