const botoes = document.querySelectorAll('.botao');
const personagem= document.querySelectorAll(".Personagem");


botoes.forEach((botao, indice)=>{
    botao.addEventListener("click", () =>{
        desselecionarbotao();
        desselecionarpersonagem();


        botao.classList.add("selecionado")
        personagem[indice].classList.add("selecionado")
    });
});

function desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".Personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

