import "../../js/plugins/hc-convas/js/hc-offcanvas-nav";
import "../../js/plugins/mhead";

const navbar = $(".navbar");
let navbarHeight = false;
const bodyNavbarHeight = function () {
  navbarHeight = $(".navbar").outerHeight();
};

const mobNav = $(".menu--main").hcOffcanvasNav({
  disableAt: false,
  customToggle: $(".burger"),
  labelBack: "",
  position: "left",
  pushContent: "#container",
  disableBody: false,
});

let mobHeader = $('<header class="mobnav-header"></header>');
let mobFooter = $('<footer class="mobnav-footer"></footer>');
let mobnavCtn = $(".hc-offcanvas-nav .nav-content");
// let menuAppendEl = $();
// menuAppendEl.add(".navbar .tel");
// console.log(menuAppendEl);
// const menuAppend = menuAppendEl.clone();
mobHeader.prependTo(mobnavCtn);
mobFooter.appendTo(mobnavCtn);

// menuAppendEl.appendTo(mobnavCtn.find("footer"));

$(".navbar").mhead({
  scroll: {
    hide: 200,
  },
});

$(window).on("load", function () {
  bodyNavbarHeight();
});
$(window).on("resize", function () {
  bodyNavbarHeight();
});

//тфм ещ зфпу
$('a[href*="#"]:not(".fancyform")').on("click", function (e) {
  let target = this.hash;
  let $target = $(target);
  if ($target.length) {
    e.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - navbarHeight,
        },
        900,
        "swing",
        function () {
          history.pushState(
            {},
            document.title,
            window.location.pathname + target
          );
          return false;
          // window.location.hash = target;
        }
      );
  }
  return false;
});
