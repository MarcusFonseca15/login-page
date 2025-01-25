
function efeito() {
    var campos = document.querySelectorAll("#TxFSenha, #TxFConfSenha"); //Selecionar especificamente o '#' Id 
    
    campos.forEach(function(x) {
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });
}

/*-------- THEME SWITCH -----------*/ 
document.addEventListener('DOMContentLoaded', function() {
const trocar = document.querySelector('.btn');

trocar.addEventListener('click', function(){
    document.body.classList.toggle('modo-dark');
    document.body.classList.toggle('modo-claro');

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



