// Citações dinâmicas sobre sustentabilidade no agro
const mensagensSustentaveis = [
    "“Produzir com sustentabilidade é garantir o alimento de hoje sem comprometer o amanhã.”",
    "“A tecnologia é a maior aliada da preservação ambiental no campo.”",
    "“Solo saudável, planta forte, futuro próspero: o ciclo do agro inteligente.”",
    "“Preservar a biodiversidade não reduz a colheita, multiplica o valor do que é produzido.”"
];

const btnMensagem = document.getElementById('btn-mensagem');
const campoMensagem = document.getElementById('mensagem-dinamica');

// Evento para mostrar mensagens aleatórias
btnMensagem.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * mensagensSustentaveis.length);
    campoMensagem.textContent = mensagensSustentaveis[indiceAleatorio];
    
    // Mostra o elemento caso esteja escondido
    campoMensagem.classList.remove('hidden');
});

// Manipulação do Formulário de Contato
const formContato = document.getElementById('form-contato');

formContato.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Simulação de envio bem-sucedido
    alert(`Obrigado pelo contato, ${nome}! Nossa equipe focada em sustentabilidade enviará uma resposta para o e-mail: ${email}.`);
    
    // Limpa o formulário
    formContato.reset();
});
