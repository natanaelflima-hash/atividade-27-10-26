
// let body = document.querySelector("body");
// let div = document.querySelector("div");
// body.removeChild(div);

// atividade
// let h1 = document.querySelector("#trocarTexto");
// esse comando serve para eu acessar a propridade de cores da fonte no html
// h1.style.color = "purple";
// h1.style.background = "blue";
// h1.style.height = "20px";
// SEMPRE QUE QUISER ALTERAR OU SABER UM VALOR DO CSS DE UM ELEMENTO HTML 
// nomeTag.style.atributo

// let body = document.querySelector("body");
// body.style.background = "red";

// var h1 = document.querySelector("h1");
// var paragrafo = document.querySelector("p");

// paragrafo.innerText = h1.innerText;

//O defer serve para fazer o navegador executar um arquivo JavaScript somente depois que o HTML for totalmente carregado e interpretado, sem bloquear a leitura do HTML enquanto o arquivo é baixado

// function verificar(cor) {
//     if (cor == "Blue" || cor == "Red" || cor == "Yellow")
//         return "Cor primária escolhida";
//     else
//         return "Cor secundária escolhida";
// }

// let cor = prompt("Escolha uma cor:");
// document.body.style.background = cor;
// alert(verificar(cor));

let button = document.querySelector("button");
let h1 = document.querySelector("h1")
button.addEventListener("click",function(){
    document.body.style.background = "black";
h1.style.color = "white"
   
});

