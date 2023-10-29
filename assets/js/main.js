function appWinProgress() {
  return document.body.style.getPropertyValue("--scroll") * 10;
}

$(document).ready(function () {
  $("#progress-count").text(
    "Processing file " + Math.floor(239 * appWinProgress()) + "/239"
  );
  $("#progress-percentage").text(Math.floor(appWinProgress() * 100) + "%");
  $("#progress-eta").text(
    "Approx. " + Math.floor(10 - appWinProgress() * 10) + " minutes left"
  );
});

$(document).ready(function () {
  $(window).on("scroll", function (event) {
    // Get scroll percentage
    let scrollVal =
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    $("body").css("--scroll", scrollVal);
    // Update app window
    winProgress = appWinProgress();
    if (winProgress <= 1) {
      $("#progress-count").text(
        "Processing file " + Math.floor(239 * winProgress) + "/239"
      );
      $("#progress-percentage").text(Math.floor(winProgress * 100) + "%");
      $("#progress-eta").text(
        "Approx. " + Math.floor(10 - winProgress * 10) + " minutes left"
      );

      // Update offload button and progress bar
      if (scrollVal > 0) {
        $(".progress-bar").removeClass("progress-bar-done");
        $(".app-ol-btn").removeClass("app-ol-btn-done");
        $(".app-ol-btn").addClass("app-ol-btn-active");
        $(".app-ol-btn").text("Offloading");
      } else {
        $(".progress-bar").removeClass("progress-bar-done");
        // Reset offload button
        $(".app-ol-btn").removeClass("app-ol-btn-active");
        $(".app-ol-btn").removeClass("app-ol-btn-done");
        $(".app-ol-btn").text("Offload");
      }
    } else {
      $("#progress-count").text("239/239 files processed");
      $("#progress-percentage").text("100%");
      $("#progress-eta").text("Offload finished");
      $(".progress-bar").addClass("progress-bar-done");
      // Reset offload button
      $(".app-ol-btn").removeClass("app-ol-btn-active");
      $(".app-ol-btn").addClass("app-ol-btn-done");
      $(".app-ol-btn").text("Done");
    }
  });
});

// var h = document.documentElement,
//   b = document.body,
//   st = "scrollTop",
//   sh = "scrollHeight";
// var percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

// Navbar
$("body").scrollspy({ target: ".top-menu" });

$(document).ready(function () {
  $("a.nav-link").click(function () {
    $("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

// Donation
function paypalUrl() {
  let amount = $("#donateAmount").val();
  if (amount === "") {
    amount = "10";
  }
  let url = "https://paypal.me/thejoltjoker/" + amount + "usd";
  return url;
}

$(document).ready(function () {
  $("#donateAmount").on("input", function (event) {
    if ($(this).val() >= 2 && $(this).val() < 10) {
      $("#donate-p").text("donut");
    } else if ($(this).val() >= 10 && $(this).val() < 20) {
      $("#donate-p").text("movie ticket");
    } else if ($(this).val() >= 20 && $(this).val() < 50) {
      $("#donate-p").text("memory card");
    } else if ($(this).val() >= 50 && $(this).val() < 500) {
      $("#donate-p").text("lens");
    } else if ($(this).val() >= 500 && $(this).val() < 1500) {
      $("#donate-p").text("drone");
    } else if ($(this).val() >= 1500 && $(this).val() < 5000) {
      $("#donate-p").text("camera");
    } else if ($(this).val() >= 5000) {
      $("#donate-p").text("whole bunch of lenses!");
    }
    $(".donate-button").attr("href", paypalUrl());
  });
});

// $(document).ready(function () {
//   $(".donate-button").click(function () {
//     let amount = $("#donationAmount").val();
//     if (amount === ''){
//       amount = '10'
//     };
//     let url = 'https://paypal.me/thejoltjoker/' + amount + 'usd';
//     window.location.href = url;
//   });
// });
