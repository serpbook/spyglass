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

$( document ).ready( function() {
    //-- begin clean up unwanted elements
    // what we want to avoid here are items like Ad, etc. so that later they will not be selected / numbered
    // does not always need to be removed, we can also replace it with other elements to maintain aesthetics

    $( "div.action-menu" ).each( function() {
        $( this ).remove();
    } );

    // People also ask
    $( "div.related-question-pair" ).each( function() {
        $( this ).html( "<div style='margin-top: 12px; margin-bottom: 12px'><span>" + $( this ).text() + "</span></div>" );
    } );

    // Ad
    $( ":has(> a[href*='/aclk?'][href*='sa='][href*='adurl='], > a[data-rw*='/aclk?'][href*='sa='][href*='adurl='])" ).each( function() {
        $( this ).html( "<span>" + $( this ).text() + "</span>" );
    } );

    //-- end clean up unwanted elements

    var rank         = 1;
    var queries      = "div.g :not(.r) > a:has(> h3)";

    if ( ignore_local != 1 ) {
        // append query for local
        queries += ", div[data-hveid] a.rllt__link:not(.b9tNq)";
    }

    // numbering
    $( queries ).each( function() {
        $( this )
            .parent()
            .prepend( "<div style='border: 1px solid #c4c4c4;color: #ea4335;float: left;font-size: 18px;margin-right: 12px;margin-top: 24px;padding-left: 5px;padding-right: 5px;'>#" + rank + "</div>" );
        rank++;
    } );

  //scroll to function, to scroll to the ranking url
  var scrollTo = [];
  if (scrollTo.length == 0 && ignore_local == 0) {
    scrollTo = $("a[href='" + rankingurl + "']").closest("div.uMdZh, div.g")[0];
  } else {
    scrollTo = $("a[href='" + rankingurl + "']").closest("div.g");
  }

  scrollTo.css("background", "#bfff25");
  
  setTimeout(function(){ 
    window.scrollTo(scrollTo.offset().top,scrollTo.offset().top-100);
    scrollTo.focus();
  }, 1000);

} );
