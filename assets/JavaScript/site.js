document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementById('formLogin')) {   document.getElementById('formLogin').addEventListener('submit', function(event) {
       event.preventDefault(); 
       
            const usuario = document.getElementById('txtUsuario').value;
            const senha = document.getElementById('txtSenha').value;

            if (usuario === 'admin' && senha === '1234') {
                alert('Login bem-sucedido!');
                window.location.href = 'index.html'; 
            } else {
                alert('Usuário ou senha inválidos.');
            }
        });
    }
});

