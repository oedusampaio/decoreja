document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("adminLoginForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("adminUsername").value;
      const password = document.getElementById("adminPassword").value;

      // Credenciais simples (mockadas)
      if (username === "admin" && password === "admin123") {
        alert("Login realizado com sucesso!");
        window.location.href = "admindash.html"; // Página que você vai criar
      } else {
        alert("Usuário ou senha inválidos.");
      }
    });
  }
});
