// スライダー
$(function () {
  $(".slider").slick({
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "10%",
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // 767px以下
        settings: {
          slidesToShow: 1, // slidesToShowを1に設定
          centerMode: false, // centerModeをオフに
          centerPadding: "0" // centerPaddingをオフに
        }
      }
    ]
  });
});

// ハンバーガーメニュー
$(function () {
  $(".hamburger").click(function () {
    $(".header-nav-sp").fadeToggle();
    $(".hamburger").toggleClass("open");
  });
});
