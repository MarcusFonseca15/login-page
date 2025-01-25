//‘use strict’ //reduz erros silenciosos, melhora o desempenho,
            // fornece mais avisos e menos recursos não seguros

const trocar = document.querySelector('.btn');

trocar.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var nomeClasse = document.body.className;

    if(nomeClasse == "modo-claro"){
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Claro";
    }

    console.log('Estado atual: ' + nomeClasse);
});

