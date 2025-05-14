document.getElementById("cep").addEventListener("input", function () {
    let cep = this.value.replace(/\D/g, "");
    
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("endereco").value = data.logradouro || "";
                document.getElementById("cidade").value = data.localidade || "";
                document.getElementById("estado").value = data.uf || "";
            })
            .catch(error => console.error('Erro ao buscar CEP:', error));
    }
});
