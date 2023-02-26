function toggleMode() {
  // Ativar/desativar dark mode
  const body = document.body;
  body.classList.toggle("light");

  // Substituir a image na ativação/desativação do dark mode

  // Pegar a tag img
  const img = document.querySelector("#profile img");

  // Substituir a imagem
  if (body.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    // Se tiver dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-dark.png");
  }
}
