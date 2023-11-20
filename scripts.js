var listaAnimes = [];
listaAnimes[0] = 'https://upload.wikimedia.org/wikipedia/pt/b/b2/SwordArtOnlineVol.1.jpg'
listaAnimes[1] = 'https://m.media-amazon.com/images/I/81yo1ig28HL._AC_UF1000,1000_QL80_.jpg'
listaAnimes[2] = 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg'
listaAnimes[3] = 'https://br.web.img3.acsta.net/c_310_420/pictures/16/04/11/16/56/089875.jpg'

var listaNomeAnimes= ['Sword Art Online', 'Yona of The Dawn', 'Death Note', 'Naruto'];
document.write('<div class="container_todosFilmes">')

for(var i=0; i<listaAnimes.length; i++){
    document.write('<div class="container_filme">')
    document.write('<img src=' + listaAnimes[i] + '>')
    document.write('<p>'+ listaNomeAnimes[i] +'</p>')
    document.write('</div>')
}
