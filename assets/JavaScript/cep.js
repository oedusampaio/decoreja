document.getElementById("cep").addEventListener("blur", function () {
    const cep = this.value.replace(/\D/g, "");
    
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert("CEP não encontrado. Verifique e tente novamente.");
                    return;
                }
                document.getElementById("endereco").value = data.logradouro || "";
                document.getElementById("cidade").value = data.localidade || "";
                document.getElementById("estado").value = data.uf || "";
            })
            .catch(error => {
                console.error('Erro ao buscar CEP:', error);
                alert("Erro ao buscar endereço. Tente novamente mais tarde.");
            });
    } else {
        alert("CEP inválido. Digite 8 números.");
    }
});
