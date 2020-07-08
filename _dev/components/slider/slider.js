import "../../js/plugins/slick/slick";

$(".sept-count").slick({
  asNavFor: ".septic-desc, .septic-img",
  rows: 0,
  slidesToShow: 1,
  infinite: false,
});

$(".septic-desc").slick({
  asNavFor: ".sept-count, .septic-img",
  rows: 0,
  slidesToShow: 1,
  arrows: false,
  infinite: false,
});

$(".septic-img").slick({
  asNavFor: ".sept-count, .septic-desc",
  rows: 0,
  slidesToShow: 1,
  infinite: false,
  fade: true,
  speed: 1000,
});

$(".photo-gall__wrap").slick({
  rows: 3,
  slidesToShow: 2,
  lazyLoad: "ondemand",
});
