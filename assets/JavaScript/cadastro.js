document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o recarregamento da página

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const preferencias = document.getElementById("preferencias").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();

  // Validação simples
  if (!nome || !email || !senha || !cep || !endereco || !cidade || !estado) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // Cria objeto do usuário
  const novoUsuario = {
    nome,
    email,
    senha,
    preferencias,
    cep,
    endereco,
    cidade,
    estado
  };

  // Busca usuários já cadastrados
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifica se o e-mail já existe
  const emailExistente = usuarios.some(user => user.email === email);
  if (emailExistente) {
    alert("Este e-mail já está cadastrado.");
    return;
  }

  // Salva novo usuário
  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html"; // Redireciona para o login
});
