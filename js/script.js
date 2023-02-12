////////////////////////////////////////
// Début Script Menu Navigation
////////////////////////////////////////
$(".navbar-nav .nav-item").on("click", function () {
  $(".navbar-nav .nav-item").find(".active").removeClass("active");
});

$(".navbar-nav li a").on("click", function () {
  if (!$(this).hasClass("dropdown-toggle")) {
    $(".navbar-collapse").collapse("hide");
  }
});

// Définit le sous-onglet actif dans le menu déroulant.
$(".sub-tab a").on("click", function () {
  $(this).closest("li").find("span").text($(this).text());
});

////////////////////////////////////////
// Fin Script Menu Navigation
////////////////////////////////////////

// Fonction éxécutée une fois le chargement de la page complété.
$(document).ready(function () {

  console.log("hello wolrd")

});