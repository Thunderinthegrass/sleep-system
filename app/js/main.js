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

function mobileMenu() {
  const mobileBtn = document.querySelector('.header__mobile-menu-btn');
  const headerNav = document.querySelector('.header__nav');
  let count = 0;

  mobileBtn.addEventListener('click', () => {
    if (count === 0) {
      headerNav.style.display = 'block';
      count = 1;
    }
    else {
      headerNav.style.display = 'none';
      count = 0;
    }
  })
}
mobileMenu();