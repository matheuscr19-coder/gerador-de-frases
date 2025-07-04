const frases = [
    "A persistência é o caminho do êxito.",
    "Não importa a velocidade, continue andando.",
    "Tudo parece impossível até que seja feito.",
    "O fracasso é apenas a oportunidade para recomeçar com mais inteligência.",
    "Você é mais forte do que pensa.",
    "A única maneira de fazer um ótimo trabalho é amar o que faz.",
    "Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir."
];

function gerarFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    const fraseSelecionada = frases[indice];
    document.getElementById("frase").innerText = fraseSelecionada;
}
