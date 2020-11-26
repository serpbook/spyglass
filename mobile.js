var img = '';
if(!window.location.href.includes('&client')){
  img = '<img src=\"https://keyword.com/serp/images/keyword-logo.svg\" width=\"40\"><br><br>';
}

var unranked = '';
if(!window.location.href.includes('&unranked')){
  unranked = '<br><br><font color=crimson>We did not find your site ranking for the keyword. This is the first page of the results.</font>';
}

$(".center_col:first").prepend('<p style="background-color: #ffffff;color: #8495b1;line-height: 22px;text-align:  center;padding: 25px;border: 1px dashed #ccc;margin-bottom: 18px;font-size: 16px;">' + img + 'This is the page we found on the day of the ranking update. Please note that the current live page may differ, depending on which datacenter you are connected to.' + unranked + '<br><br><a target="_blank" href="' + window.location.href + '&debug"><small><u>View Keyword Settings</u></small></a></p>');


//branding updates
setTimeout(function() {
  $('#swml-loc').html('Keyword.com');
  $('#Wprf1b').html('Keyword.com');

  //hide this popup in mobile
  $('.bErdLd').hide();
  $('.t7xA6').hide();
  $(".Sr5CLc").hide();
  $(".wwYr3").hide();

}, 1000);


//auto scroll
$(document).ready(function(){
  var scrollTo = $("a[href='"+rankingurl+"']").closest( "div.uUPGi" );
  if(scrollTo.length == 0){
    scrollTo = $("a[href='"+rankingurl+"']").closest( "div.aJOXUd" );
  }
  console.log(scrollTo);
  scrollTo.css('background','#bfff25');

    $('html, body').animate({
      scrollTop: scrollTo.offset().top-100
    }, 1000, function(){});
});


//counting the results in SERPs
$(document).ready(function () {
  var cnt = 1;
  $("div.O9g5cc").each(function () {

    $(this).html(
      "<span class='num'>#" +
      cnt +
      "</span>" +
      $(this).html()
    );
    cnt++;

  });
});
