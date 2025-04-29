// Alternar para Cadastro
document.getElementById('mostrar-cadastro').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-cadastro').style.display = 'block';
    document.getElementById('modalLoginCadastroLabel').textContent = 'Criar Conta';
  });
  
  // Voltar para Login
  document.getElementById('voltar-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-cadastro').style.display = 'none';
    document.getElementById('form-login').style.display = 'block';
    document.getElementById('modalLoginCadastroLabel').textContent = 'Entrar na Conta';
  });
  
  // Rolagem suave para a seção "Sobre Nós"
  document.querySelectorAll('a[href^="#sobre-nos"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector('#sobre-nos').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  