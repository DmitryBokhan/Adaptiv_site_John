// alert('Hello Gulp!');

//**** МЕНЮ БУРГЕР****/
//добавляем класс active к icon-menu и header__menu при событии click
$(document).ready(function () {
   $('.icon-menu').click(function (e) {
      $('.menu__icon,.menu__body').toggleClass('_active');
   });
   $('.menu__link').click(function (e) {
      $('.menu__icon,.menu__body').toggleClass('_active');
   });
});
//**** МЕНЮ БУРГЕР конец кода****/