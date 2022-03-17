function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listaFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido, tente em formato JPG");
  }
  document.getElementById("filme").value = "";
}

function listaFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
