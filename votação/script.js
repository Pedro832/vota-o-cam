// script.js

const candidatos = [
    { numero: 11, nome: "Artur/Daniel", cargo: "Presidente","Vice-Presidente", imagem: "./assets/DanielArtur.png", votos: 0 },
    { numero: 25, nome: "Vitor/Cesar", cargo: "Presidente","Vice-Presidente", imagem: "./assets/CesarVitor.png", votos: 0 },
    { numero: 15, nome: "Jamily/Lara", cargo: "Presidente","Vice-Presidente", imagem: "./assets/LaraJamily.png", votos: 0 },
    { numero: 28, nome: "Emily/Laura", cargo: "Presidente","Vice-Presidente", imagem: "./assets/EmilyLaura.png", votos: 0 },
    { numero: 23, nome: "Eloa/Sofia", cargo: "Presidente","Vice-Presidente", imagem: "./assets/EloaSofia.png", votos: 0 },
    { numero: 10, nome: "Ester/Sofia", cargo: "Presidente","Vice-Presidente", imagem: "./assets/EsterSofia.png", votos: 0 },
    { numero: 18, nome: "Sofia/Geovana", cargo: "Presidente","Vice-Presidente", imagem: "./assets/SofiaGeovana.png", votos: 0 },
    { numero: 20, nome: "Lais/Alice", cargo: "Presidente","Vice-Presidente", imagem: "./assets/LaisAlice.png", votos: 0 },
    
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
