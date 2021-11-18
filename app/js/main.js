function footerMenu() {
  let menuItem = document.querySelectorAll('.footer__mobile-nav-title');
  let menuList = document.querySelectorAll('.footer__mobile-nav-list');

  menuItem.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      menuList[index].classList.toggle('footer__mobile-nav-list--active');
    })
  })
}
footerMenu();