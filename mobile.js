//setting mobile background
$("html").css("width", "520px");
$("html").css("margin", "0 auto");
$("html").css("background", "#adadad");

var img = "";
if (!window.location.href.includes("&client")) {
  img =
    '<img src="https://keyword.com/serp/images/keyword-logo.svg" width="40"><br><br>';
}

var unranked = "";
if (window.location.href.includes("&unranked")) {
  unranked =
    "<br><br><font color=crimson>We did not find your site ranking for the keyword. This is the first page of the results.</font>";
}

$(".center_col:first").prepend(
  '<p style="background-color: #ffffff;color: #8495b1;line-height: 22px;text-align:  center;padding: 25px;border: 1px dashed #ccc;margin-bottom: 18px;font-size: 16px;">' +
    img +
    "This is the page we found on the day of the ranking update. Please note that the current live page may differ, depending on which datacenter you are connected to." +
    unranked +
    '<br><br><a target="_blank" href="' +
    window.location.href +
    '&debug"><small><u>View Keyword Settings</u></small></a></p>'
);

//branding updates
setTimeout(function () {
  $("#swml-loc").html("Keyword.com");
  $("#Wprf1b").html("Keyword.com");

  //hide this popup in mobile
  $(".bErdLd").hide();
  $(".t7xA6").hide();
  $(".Sr5CLc").hide();
  $(".wwYr3").hide();
  
  $('.HTjtHe').hide();
  $('.EM1Mrb').css("overflow", "auto"); //allow scrolling
}, 1000);

//counting the results in SERPs
$(document).ready(function () {
  var cnt = 1;
  if (ignore_local == 0) {
    $(".Zu0yb.UGIkD.qzEoUe").each(function () {
      
    });  
  }
  // added .ifM9O .V1nn0e.R5lVqb .uo4vr img to include featured snippet
  $(".Zu0yb.UGIkD.qzEoUe,.ifM9O .V1nn0e.R5lVqb .uo4vr img,div.Dwsemf").each(function () {
    if ($(this).parent("g-img").length == 0 && typeof $(this).closest('a').attr('data-click') == 'undefined' && $(this).parent().find('span.jpu5Q.VqFMTc.p8AiDd').length == 0) {
      $(this)
        .parent()
        .html(
          "<span class='num'>#" + cnt + "</span>" + $(this).parent().html()
        );
      cnt++;
    }
  });
  //styling CSS through JS
  $("span.num").css("margin-top", "3px");
  $("span.num").css("position", "relative");
  $("span.num").css("font-size", "20px");
  $("span.num").css("padding", "10px 15px 0px");
  $("span.num").css("color", "black");

  //scroll to function, to scroll to the ranking url
  var scrollTo = $("a[href='" + rankingurl + "']").closest("div.uUPGi");
  if (scrollTo.length == 0) {
    scrollTo = $("a[href='" + rankingurl + "']").closest("div.aJOXUd");
  }
  
 if (scrollTo.length == 0) {
    scrollTo = $("a[href='" + rankingurl + "']").closest("div.Ww4FFb");
  }
  
  if (scrollTo.length == 0) {
    scrollTo = $("a[href='" + rankingurl + "']").closest("div.mnr-c");
  }
  
  scrollTo.css("background", "#bfff25");

  setTimeout(function(){ 
    window.scrollTo(scrollTo.offset().top,scrollTo.offset().top-100);
    scrollTo.focus();
  }, 1000);
  
});
