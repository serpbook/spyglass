//hide and enable scrolling https://www.dropbox.com/s/xr5v8dbcs5gsi2p/Screenshot%202019-02-09%2012.39.04.png?dl=0
$("html").css("overflow", "auto");
$("#lb").hide();

//hide cookies notice https://i.imgur.com/Q70yy1G.png
$('.jw8mI').hide();
$('.vUd4jb').hide();

//replace footer text branding
$("#swml-loc").html("Keyword.com");
$("#Wprf1b").html("Keyword.com");

//add a timeout incase the HTML hasn't been loaded yet
setTimeout(function () {
  $("#swml-loc").html("Keyword.com");
}, 1000);
$("#resultStats").css("background-color", "cyan");

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

var near = "";
if (window.location.href.includes("&near")) {
  near =
    '<br><br><br><span style="padding: 16px;margin-top: 25px;border: dotted;border-color: darkgoldenrod;color: #333;"><img src="https://keyword.com/serp/images/nearpin.svg" height="20">Searching from: ' +
    nearvalue +
    "</span>";
}

$("#tvcap").prepend(
  '<p style="background-color: #ffffff;color: #8495b1;line-height: 22px;text-align:  center;padding: 25px;border: 1px dashed #ccc;">' +
    img +
    "This is the page we found on the day of the ranking update. Please note that the current live page may differ, depending on which datacenter you are connected to." +
    near +
    unranked +
    '<br><br><a target="_blank" href="' +
    window.location.href +
    '&debug"><small><u>View Keyword Settings</u></small></a><br><br><svg height="22px" version="1.1" viewBox="0 0 22 22" width="22px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="action" stroke="none" stroke-width="1"><g id="alert-notification-info-attention"><path d="M11,22 C17.0751322,22 22,17.0751322 22,11 C22,4.92486775 17.0751322,0 11,0 C4.92486775,0 0,4.92486775 0,11 C0,17.0751322 4.92486775,22 11,22 Z M11,20 C15.9705627,20 20,15.9705627 20,11 C20,6.02943725 15.9705627,2 11,2 C6.02943725,2 2,6.02943725 2,11 C2,15.9705627 6.02943725,20 11,20 Z" fill="#F2C500"/><path d="M10,6 L12,6 L12,13 L10,13 L10,6 Z M10,14 L12,14 L12,16 L10,16 L10,14 Z" fill="#F59D00"/></g></g></svg>  <a target="_blank" href="' +
    window.location.href.replace("spyglass", "self-debug") +
    '">Having issues with this keyword?</a></p>'
);
$("#gb").hide();

//counter
$(document).ready(function () {
  var cnt = 1;
  if (ignore_local == 0) {
    if (in_local_pack) {
      $("div.dbg0pd").each(function () {
        //buggy and not working perfectly for now
        //$(this).html("<span class='num'>#" + cnt + "</span>" + $(this).html());
        cnt++;
      });
    }
  } else {
    $("div.dbg0pd").each(function () {
      $(this).html("<span class='num ignored'>Ignored</span>" + $(this).html());
    });
  }
  $("#rso div.rc, .kp-blk .g .yuRUbf").each(function () {
    if (
      $(this).parent("div.gy6Qzb").length == 0 &&
      $(this).closest("div.pocFOe").length == 0
    ) {
      if ($(this).closest("div.kp-blk").length > 0) {
        $(this)
          .closest("div.kp-blk .yuRUbf")
          .parent()
          .parent()
          .html(
            "<span class='num'>#" +
              cnt +
              "</span>" +
              $(this).closest("div.kp-blk .yuRUbf").parent().parent().html()
          );
        cnt++;
      }
    }
  });
  $("#rso div.rc,.yuRUbf,div.DOqJne").each(function () {
    if (
      $(this).closest("div.ifM9O").length == 0 &&
      $(this).parent("div.gy6Qzb").length == 0 &&
      $(this).closest("div.pocFOe").length == 0
    ) {
      $(this).html("<span class='num'>#" + cnt + "</span>" + $(this).html());
      cnt++;
    }
  });

  //styling CSS through JS
  $("span.num").css("left", "-50px");
  $("span.num").css("position", "absolute");
  $("span.num").css("margin-top", "26px");
  $("span.num").css("font-size", "20px");
  $("span.ignored").css("left", "-100px");

  //scroll to function, to scroll to the ranking url
  var scrollTo = [];
  if (scrollTo.length == 0 && ignore_local == 0) {
    scrollTo = $("a[href='" + rankingurl + "']").closest("div.uMdZh");
  } else {
    scrollTo = $("a[href='" + rankingurl + "']").closest("div.g");
  }

  scrollTo.css("background", "#bfff25");
  
  setTimeout(function(){ 
    window.scrollTo(scrollTo.offset().top,scrollTo.offset().top-100);
    scrollTo.focus();
  }, 1000);
});
