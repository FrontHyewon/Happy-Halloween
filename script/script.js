// 스크롤 시 한 영역씩 이동(jquery)
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var $html = $("html");

var page = 1;

var lastPage = $(".content").length;

$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });
});

// 상단 고정 메뉴(jquery)
$(document).ready(function () {
  var hfoffset = $("header, footer").offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > hfoffset.top) {
      $("header, footer").addClass("hfFixed");
    } else {
      $("header, footer").removeClass("hfFixed");
    }
  });
});

// first-section 애니메이션(gsap)
const checkBox = document.querySelector("#rope");
// console.log(checkBox);
const fadeEls = document.querySelectorAll(".first-section .fade-in");
checkBox.addEventListener("change", () => {
  fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
      delay: (index + 1) * 0.5,
      opacity: 1,
    });
  });
});

// scroll animation(Scroll-Magic)
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// scroll-toTop(gsap ScrollToPlugin)
const toTopEl = document.querySelector(".last-section img");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
