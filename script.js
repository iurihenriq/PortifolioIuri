function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");

  menuButton.addEventListener('click', openMenu);

  function openMenu() {
      menuList.classList.toggle('active')
      menuButton.classList.toggle('active')
  }

}

function initMenuTransition() {
    
  function transitionMenu() {
      const nav = document.querySelector('nav');
      nav.classList.toggle("fixed", window.scrollY > 0)
  }
  window.addEventListener('scroll', transitionMenu)
}

initMenuTransition();
initMenuMobile();