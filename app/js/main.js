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

function tabs(tabItem, tabNavItem) {
  tabNavItem.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      for (let i = 0; i < tabNavItem.length; i++) {
        tabNavItem[i].classList.remove('tabs-navigation__item--active');
        e.target.classList.add('tabs-navigation__item--active');
        tabItem[i].classList.remove('tab--active');
      }
      tabItem[index].classList.add('tab--active');
    })
  })
}

function productCardTabs() {
  const tabNavItem = document.querySelectorAll('.product-card-navigation__item');
  const tabBody = document.querySelector('.product-card__tab-body');
  const tabItem = tabBody.querySelectorAll('.tab');
  tabs(tabItem, tabNavItem);
}
productCardTabs();