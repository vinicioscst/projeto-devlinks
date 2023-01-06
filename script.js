function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png"),
    img.setAttribute(
        "alt",
        "Ilustração de um avatar com jaqueta preta, camiseta cinza por baixo e fundo roxo."
      )
  } else {
    // se tiver sem light mode, manter a imagem dark
    img.setAttribute("src", "./assets/avatar-dark.png"),
    img.setAttribute(
        "alt",
        "Ilustração de um avatar com jaqueta preta, camiseta cinza por baixo e fundo laranja."
      )
  }
}
