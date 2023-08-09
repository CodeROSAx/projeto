function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //é oq está a baixo, apenas simplificando tudo

  // if(html.classList.contains('light')) { se (oq esta dentro) é verdadeiro
  // html.classList.remove('light')         faz isso
  //} else {                                se não
  // html.classList.add('light')            faz isso
  // }       if é "se" e else é "se não"

  // pegar a tag img
  const img = document.querySelector("#profile img") //querySelector é pesquisa pelo seletor

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png") //setAttribute é adicionar,ajustar, modificar um atributo
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "squirtle de óculos")
  } else {
    alt.setAttribute("alt", "Foto do Felipe Rosa no espelho de uma academia")
  }
}
