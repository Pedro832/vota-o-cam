// script.js

const candidatos = [
    { numero: 16, nome: "MarinaMarques", cargo: "Presidente", imagem: "./assets/MarinaMarques.png", votos: 0 },
    { numero: 10, nome: "Guilherme", cargo: "Presidente", imagem: "./assets/Guilherme.png", votos: 0 },
    { numero: 20, nome: "Ana Júlia", cargo: "Presidente", imagem: "./assets/AnaJúlia.png", votos: 0 },
    { numero: 2087, nome: "Ester", cargo: "Deputados Federal", imagem: "./assets/Ester.png", votos: 0 },
    { numero: 1039, nome: "Athos Tavares", cargo: "Deputados Federal", imagem: "./assets/AthosTavares.png", votos: 0 },
    { numero: 1658, nome: "Lucas", cargo: "Deputados Federal", imagem: "./assets/Lucas.png", votos: 0 },
    { numero: 10831, nome: "Geovana", cargo: "Deputados Estaduais", imagem: "./assets/Geovana.png", votos: 0 },
    { numero: 20694, nome: "Nicole", cargo: "Deputados Estaduais", imagem: "./assets/Nicole.png", votos: 0 },
    { numero: 16537, nome: "Maria Júlia", cargo: "Deputados Estaduais", imagem: "./assets/MariaJúlia .png", votos: 0 },
    { numero: 104, nome: "Katarina", cargo: "Senadores", imagem: "./assets/katarina.png", votos: 0 },
    { numero: 160, nome: "Laura", cargo: "Senadores", imagem: "./assets/Laura.png", votos: 0 },
    { numero: 205, nome: "Vander", cargo: "Senadores", imagem: "./assets/Vander.png", votos: 0 },
    // Adicione mais candidatos conforme necessário
];

function mostrarCandidato() {
    const numero = document.getElementById('numero').value;
    const candidato = candidatos.find(c => c.numero == numero);

    const candidatoDiv = document.getElementById('candidato');
    const confirmacaoDiv = document.getElementById('confirmacao');

    if (candidato) {
        candidatoDiv.innerHTML = `
            <h3>${candidato.nome}</h3>
            <img src="${candidato.imagem}" alt="${candidato.nome}">
        `;
        confirmacaoDiv.style.display = 'block';
    } else {
        candidatoDiv.innerHTML = '<p>Candidato não encontrado.</p>';
        confirmacaoDiv.style.display = 'none';
    }
}

function votar() {
    const numero = document.getElementById('numero').value;
    const candidato = candidatos.find(c => c.numero == numero);

    if (candidato) {
        candidato.votos++;
        alert(`Voto registrado para ${candidato.nome}!`);

        document.getElementById('numero').value = '';
        document.getElementById('candidato').innerHTML = '';
        document.getElementById('confirmacao').style.display = 'none';
    }
}

function mostrarResultados() {
    const resultadosDiv = document.getElementById('resultados');
    const resultadosLista = document.getElementById('resultados-lista');

    resultadosLista.innerHTML = candidatos
        .sort((a, b) => b.votos - a.votos)
        .map(c => `<li>${c.nome} - ${c.votos} votos</li>`)
        .join('');

    resultadosDiv.style.display = 'block';
}
