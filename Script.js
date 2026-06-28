document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    
    const nomeError = document.getElementById('nome-error');
    const emailError = document.getElementById('email-error');
    const mensagemError = document.getElementById('mensagem-error');

    // Função para limpar erros
    function clearErrors() {
        nomeError.textContent = '';
        emailError.textContent = '';
        mensagemError.textContent = '';
        
        nomeInput.classList.remove('error');
        emailInput.classList.remove('error');
        mensagemInput.classList.remove('error');
    }

    // Validação de e-mail com regex
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Validação principal
    function validateForm() {
        let isValid = true;
        clearErrors();

        // Validação do Nome
        if (nomeInput.value.trim() === '') {
            nomeError.textContent = 'Por favor, informe seu nome.';
            nomeInput.classList.add('error');
            isValid = false;
        } else if (nomeInput.value.trim().length < 3) {
            nomeError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
            nomeInput.classList.add('error');
            isValid = false;
        }

        // Validação do E-mail
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Por favor, informe seu e-mail.';
            emailInput.classList.add('error');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Por favor, informe um e-mail válido.';
            emailInput.classList.add('error');
            isValid = false;
        }

        // Validação da Mensagem
        if (mensagemInput.value.trim() === '') {
            mensagemError.textContent = 'Por favor, escreva sua mensagem.';
            mensagemInput.classList.add('error');
            isValid = false;
        } else if (mensagemInput.value.trim().length < 10) {
            mensagemError.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
            mensagemInput.classList.add('error');
            isValid = false;
        }

        return isValid;
    }

    // Evento de submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Aqui você pode adicionar o envio real (fetch, AJAX, etc.)
            alert('✅ Mensagem enviada com sucesso! (Simulação)');
            
            // Limpa o formulário após envio bem-sucedido
            form.reset();
            clearErrors();
        }
    });

    /* Validação em tempo real (opcional - melhora a UX) */
    [nomeInput, emailInput, mensagemInput].forEach(input => {
        input.addEventListener('blur', function() {
            if (input.value.trim() !== '') {
                validateForm(); // revalida só para limpar erro se corrigido
            }
        });
    });
});