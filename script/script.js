$(document).ready(main);
var contador = 1;
function main(){
  $('.boton').click(function(){
    if(contador == 1){
      $('.header__desplegable').animate({
        left:'0'
      });
      contador = 0;
    }else {
      contador = 1;
      $('.header__desplegable').animate({
        left:'-100%'
      });
    }
  });
  // Mostramos y ocultamos submenus
  // $('.submenu').click(function(){
    //     $(this).children('.children').slideToggle();
    // });
}
