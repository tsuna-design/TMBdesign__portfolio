// スライダー
$(function () {
  $(".slider").slick({
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "10%",
    arrows: false,
    dots: true,
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

// 下からふわっとフェードイン
$(function() {
  // スクロールイベント
    $(window).scroll(function() {
      // フェードアニメーションを呼び出す
      fadeAnime();
    });
    
    // フェードアニメーションの設定
    function fadeAnime() {
      // .fadeUpTriggerが付いた要素に対して
      $('.fadeUpTrigger').each(function() {
        // 縦位置を取得し-50pxして、変数targetに代入する
        let target = $(this).offset().top -= 50;
        // スクロール量を取得し、変数scrollに代入する
        let scroll = $(window).scrollTop();
        // 表示画面の高さを取得し、変数windowHeightに代入する
        let windowHeight = $(window).height();
        // 要素の縦位置から表示画面の高さを引いて200pxを足した数字よりscrollのほうが大きい場合
        if(scroll > target - windowHeight + 200) {
          // .fadeUpを追加する
          $(this).addClass('fadeUp');
        } else {
          // そうでない場合は.fadeUpを削除する
          $(this).removeClass('fadeUp');
        }
      });
    };    
  });

  window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }