/*-------- THEME SWITCH -----------*/ 

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    const conteiner = document.body;

    conteiner.classList.add('modo-claro');

    btn.addEventListener('click', function() {
        conteiner.classList.toggle('modo-dark');
        conteiner.classList.toggle('modo-claro');

        let nomeClasse = conteiner.className;

        this.classList.toggle('active');
        console.log('Estado atual: ' + nomeClasse);
    });
});


/*---------------VER A SENHA--------------*/
let olho1 = document.getElementById("olho1");
let olho2 = document.getElementById("olho2");
let senha = document.getElementById("TxFSenha");
let confSenha = document.getElementById("TxFConfSenha");

olho1.onclick = function() {
    let nomeClasse = document.body.className;

    if (senha.type == "password") {
        senha.type = "text";
        if (nomeClasse == "modo-claro") {
            olho1.src = "./assets/eye-openLG.png";
        } else {
            olho1.src = "./assets/eye-open.png";
        }
    } else {
        senha.type = "password";
        if (nomeClasse == "modo-dark") {
            olho1.src = "./assets/eye-closeDK.png";
        } else {
            olho1.src = "./assets/eye-close.png";
        }
    }
};

olho2.onclick = function() {
    let nomeClasse = document.body.className;

    if (TxFConfSenha.type == "password") {
        TxFConfSenha.type = "text";
        if (nomeClasse == "modo-claro") {
            olho2.src = "./assets/eye-openLG.png";
        } else {
            olho2.src = "./assets/eye-open.png";
        }
    } else {
        TxFConfSenha.type = "password";
        if (nomeClasse == "modo-dark") {
            olho2.src = "./assets/eye-closeDK.png";
        } else {
            olho2.src = "./assets/eye-close.png";
        }
    } 
};
