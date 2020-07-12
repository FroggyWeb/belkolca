$(function () {
  new Mmenu(
    "#menu",
    {
      extensions: [
        "shadow-panels",
        "fx-panels-slide-100",
        "border-none",
        "theme-black",
        "fullscreen",
        "position-right",
      ],
      navbars: {
        content: ["prev", "searchfield", "close"],
      },
      setSelected: true,
      searchfield: {
        panel: true,
      },
    },
    {}
  );

  $(".mh-head.Sticky").mhead({
    scroll: {
      hide: 200,
    },
  });

  $("body").on("click", 'a[href^="#/"]', function () {
    alert("Thank you for clicking, but that's a demo link.");
    return false;
  });
});
