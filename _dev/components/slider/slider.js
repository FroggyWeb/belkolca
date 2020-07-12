import "../../js/plugins/slick/slick";

$(".sept-count").slick({
  asNavFor: ".septic-desc, .septic-img",
  rows: 0,
  slidesToShow: 1,
  infinite: false,
});

const featuewsSetting = {
  rows: 0,
  mobileFirst: true,
  slidesToShow: 1,
  infinite: false,
  ariableWidth: true,
  responsive: [
    {
      breakpoint: 560,
      settings: "unslick",
    },
  ],
};

const featureSl = $(".js-features").slick(featuewsSetting);

$(window).on("resize", function () {
  if ($(window).width() < 560 && !featureSl.hasClass("slick-initialized")) {
    featureSl.slick(featuewsSetting);
  }
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
  accessibility: false,
  rows: 3,
  slidesToShow: 2,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
