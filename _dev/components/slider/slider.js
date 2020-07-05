import "../../js/plugins/slick/slick";

const sepCount = $(".sept-count").slick({
  asNavFor: ".septic-desc",
  slidesToShow: 1,
  rows: 1,
});

const sepDesc = $(".septic-desc").slick({
  asNavFor: ".sept-count",
  slidesToShow: 1,
  rows: 1,
  arrows: false,
});
