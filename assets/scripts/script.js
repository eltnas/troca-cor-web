let myPage = document.getElementById("page");
let myButton = document.getElementById("changeBtn");
let myTopBar = document.getElementsByTagName('header');
let myFooter = document.getElementsByTagName('footer');

function geraCor() {
    fetch('assets/scripts/cores.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o JSON");
            }
            return response.json();
        })
        .then(Data => {
            const cores = Data.cores;
            const randomIndex = Math.floor(Math.random() * cores.length);
            const coresRandom = cores[randomIndex];
            let nomeCor = document.getElementById('nome-cor');

            // Acessando os primeiros elementos do 'header' e 'footer'
            myTopBar[0].style.background = coresRandom.top;
            myTopBar[0].style.color = coresRandom.fontColor; // Corrigido 'fontcolor' para 'color'
            myPage.style.backgroundColor = coresRandom.body;
            myFooter[0].style.background = coresRandom.top;
            myFooter[0].style.color = coresRandom.fontColor; // Corrigido 'fontcolor' para 'color'
            nomeCor.innerText = coresRandom.nome;
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}

// Corrigido para passar a referência da função, não chamá-la imediatamente
document.getElementById('changeBtn').addEventListener('click', geraCor);
