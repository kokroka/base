
const abas = document.querySelectorAll(".aba");

//console.log(document.querySelectorAll(".aba"));

abas.forEach(aba => {
    aba.addEventListener("click", function(){
        
        if(aba.classList.contains("selecionada")){
            return;
        }
        
       const abaSelecionada = document.querySelector(".aba.selecionada");
      
     // console.log(abaSelecionada.classList);
     abaSelecionada.classList.remove("selecionada");

     aba.classList.add("selecionada");
     //console.log(abaSelecionada);

     const informacaoSelecionada = document.
     querySelector(".informacao.selecionada");
     informacaoSelecionada.classList.remove("selecionada");

    // console.log(informacaoSelecionada);
     
    const iddoelementodeinfdaaba = `inf-${aba.id}`
    console.log(iddoelementodeinfdaaba)

    const infasermostrada = document.getElementById(iddoelementodeinfdaaba)
    infasermostrada.classList.add("selecionada")

    })
})



   