document.addEventListener("DOMContentLoaded", function () {
  const userList = document.getElementById("userList");
  const logoutBtn = document.getElementById("logoutBtn");

  // Recupera os dados dos usuários do LocalStorage
  const users = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (users.length === 0) {
    userList.innerHTML = "<p>Nenhum usuário cadastrado.</p>";
  } else {
    users.forEach((user, index) => {
      const card = document.createElement("div");
      card.className = "user-card";

      card.innerHTML = `
        <h3>${user.nome}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>CEP:</strong> ${user.cep}</p>
        <p><strong>Endereço:</strong> ${user.logradouro}, ${user.bairro}</p>
      `;

      userList.appendChild(card);
    });
  }

  logoutBtn.addEventListener("click", function () {
    window.location.href = "adm-login.html";
  });
});
