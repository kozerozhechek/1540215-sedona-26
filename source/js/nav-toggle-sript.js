let pageNav = document.querySelector('.page-nav');
let navToggle = document.querySelector('.page-nav__toggle');

pageNav.classList.remove('page-nav--nojs');

navToggle.addEventListener('click', function ()
{
  if (pageNav.classList.contains('page-nav--closed')) {
    pageNav.classList.remove('page-nav--closed');
    pageNav.classList.add('page-nav--opened');
  } else {
    pageNav.classList.add('page-nav--closed');
    pageNav.classList.remove('page-nav--opened');
  }
}
);
