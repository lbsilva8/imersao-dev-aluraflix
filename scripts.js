var listaFilmes = []
listaFilmes[0] = 'https://upload.wikimedia.org/wikipedia/pt/b/b2/SwordArtOnlineVol.1.jpg'
listaFilmes[1] = 'https://m.media-amazon.com/images/I/81yo1ig28HL._AC_UF1000,1000_QL80_.jpg'
listaFilmes[2] = 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg'
listaFilmes[3] = 'https://br.web.img3.acsta.net/c_310_420/pictures/16/04/11/16/56/089875.jpg'

for(var i=0; i<listaFilmes.length; i++){
    document.write('<img src=' + listaFilmes[i] + '>')
}
