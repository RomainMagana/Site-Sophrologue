(function ($) {

  /* Quand je clique sur l'icône hamburger je rajoute une classe au body */
  $('#burger-icon').click(function (e) {
    e.preventDefault();
    $('.sidebar-container').toggleClass('sidebar-container-active');
  });

})(jQuery);
(function ($) {

  /* Quand je clique sur l'icône hamburger j'anime l'icone burger */
  $('#burger-icon').click(function (e) {
    e.preventDefault();
    $('.burger').toggleClass('burger-icon-active');
  });

})(jQuery);