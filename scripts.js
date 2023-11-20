var listaAnimes = [];
var listaNomeAnimes = [];
var listaTrailersAnimes = [];

function adicionarAnime(){
  var animeEscolhido = document.getElementById('anime').value;
  var nomeAnimeEscolhido = document.getElementById('nome').value;
  var trailerAnime = document.getElementById('trailer').value;
  
  
    if(( animeEscolhido.endsWith('jpg') ) || ( animeEscolhido.endsWith('jpeg') )){
      
      document.getElementById('mensagemDeErro').innerHTML = '';
      listaAnimes.push(animeEscolhido);
      listaTrailersAnimes.push(trailerAnime);
      listaNomeAnimes.push(nomeAnimeEscolhido);
  
      
      limpaCampos();
      recarregarAnimes();
      
    } else {
      
      document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
      limpaCampos();
      
    }
  }

function recarregarAnimes(){
 
  var elementoListaAnimes = document.getElementById('listaAnimes');
  elementoListaAnimes.innerHTML = '';
  for(i=0; i < listaAnimes.length ; i++){
    elementoListaAnimes.innerHTML += `<a href=" ${listaTrailersAnimes[i]} " target="_blank"><img src=" ${listaAnimes[i]} "><p>${listaNomeAnimes[i]}</p></a>`
  }
}

function limpaCampos(){
   document.getElementById('nome').value = '';
   document.getElementById('anime').value = '';
   document.getElementById('trailer').value = '';
}