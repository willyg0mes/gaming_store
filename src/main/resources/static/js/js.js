
///////////Começo Tema Red
// função para definir um determinado tema/esquema de cores
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// função para alternar entre tema claro e escuro
function toggleTheme() {
  if (localStorage.getItem('theme') === 'themedark') {
    setTheme('themered');
  } else {
    setTheme('themedark');
  }
}

// Função para sakvar o tema definido depois do recarregamento
(function () {
  if (localStorage.getItem('theme') === 'themedark') {
    setTheme('themedark');
    document.getElementById('togglered').checked = false;
  } else {
    setTheme('themered');
    document.getElementById('togglered').checked = true;
  }
})();
//Final Tema Red

///////////Começo background RGB
const toggle = document.getElementById('togglergb')
toggle.addEventListener('change', () => {
  document.body.classList.toggle('rgb')
})
toggle.addEventListener('change', () => {
  document.querySelector('.pagina').classList.toggle('temab')
})
//Final background RGB

///////////começo menu
const btnmenu = document.getElementById('btnMenu')

function toogleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault
  const menu = document.getElementById('menu')
  nav.classList.toggle('active')
}
//final menu

///////////começo slide
// btnmenu.addEventListener('click', toogleMenu)
btnmenu.addEventListener('touchstart', toogleMenu)
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activedot";
  setTimeout(showSlides, 6500); // transição das imagens em 6 segundos
}
//final slide
///////////Uploud Imagem
function upload() {
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("file");
  var image = new SimpleImage(dd2);
  image.drawTo(dd1);

}