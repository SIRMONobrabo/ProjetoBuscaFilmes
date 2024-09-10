function pesquisar(){
    let section = document.getElementById('resultado-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    

    for(let dado of dados){

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        if(titulo.includes(campoPesquisa) || 
         descricao.includes(campoPesquisa) || 
         tags.includes(campoPesquisa)){
            resultados += `
            <div class="resultado" id="resultado">
                <h3 class="titulo-resultado"><a href="${dado.imdb}" target="_blank">${dado.titulo}</a></h3>
                <p class="sinopse-resultado"> ${dado.descricao}</p>
                <p>Nota IMDB: <i class="nota-resultado">${dado.nota}</i></p>
                <a href="${dado.link}" target="_blank">Ver Mais...</a>
            </div>
            <br>
        `;
        }

    }

    section.innerHTML = resultados
}

