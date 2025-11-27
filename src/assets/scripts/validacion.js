document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacto-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valido = true;

    // limpiar errores previos
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-mensaje").textContent = "";

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    if (nombre.value.trim().length < 3) {
      nombre.classList.add("is-invalid");
      document.getElementById("error-nombre").textContent =
        "El nombre debe tener al menos 3 caracteres.";
      valido = false;
    } else {
      nombre.classList.remove("is-invalid");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add("is-invalid");
      document.getElementById("error-email").textContent =
        "Introduce un correo electrónico válido.";
      valido = false;
    } else {
      email.classList.remove("is-invalid");
    }

    if (mensaje.value.trim().length < 10) {
      mensaje.classList.add("is-invalid");
      document.getElementById("error-mensaje").textContent =
        "El mensaje debe tener al menos 10 caracteres.";
      valido = false;
    } else {
      mensaje.classList.remove("is-invalid");
    }

    if (valido) {
      form.reset();
      document.getElementById("mensaje-confirmacion").classList.remove("d-none");
    }
  });
});