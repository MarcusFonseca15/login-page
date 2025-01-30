/*-------- THEME SWITCH -----------*/ 
document.addEventListener('DOMContentLoaded', function() {
const trocar = document.querySelector('.btn');

trocar.addEventListener('click', function(){
    document.body.classList.toggle('modo-dark');
    document.body.classList.toggle('modo-claro');

    let olho1 = document.getElementById("olho1");
    let olho2 = document.getElementById("olho2");

    var nomeClasse = document.body.className;

    if(nomeClasse == "modo-claro"){
        this.textContent = "Mudar para DARK";
    } 
    else {
        this.textContent = "Mudar para CLARO";
    } 

    console.log('Estado atual: ' + nomeClasse);
    });

    document.body.classList.add('modo-claro');
    trocar.textContent = "Ativar para modo Escuro";
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

