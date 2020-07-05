import "../../js/plugins/hc-convas/js/hc-offcanvas-nav";

jQuery(document).ready(function ($) {
  $(".menu--main").hcOffcanvasNav({
    disableAt: false,
    customToggle: $(".burger"),
    labelBack: "",
    position: "right",
    pushContent: "#container",
  });
});
