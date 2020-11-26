$(document).ready(function() {
  var img = '';
  if(!window.location.href.includes('&client')){
    img = '<img src=\"https://keyword.com/serp/images/keyword-logo.svg\" width=\"40\"><br><br>';
  }

  var unranked = '';
  if(!window.location.href.includes('&unranked')){
    unranked = '<br><br><font color=crimson>We did not find your site ranking for the keyword. This is the first page of the results.</font>';
  }

  $("#center").html(img + '<span style="color:white">Showing Page ' + page_ranking + ' of YouTube - this is the page we found on the day of the ranking update. Please note that the current live page may differ, depending on which datacenter you are connected to.</span>');


    setInterval(function() {
        var cnt = 1;
        var $num = '';
        $('span.num').remove();
        $("ytd-video-renderer.ytd-item-section-renderer").each(function() {
            $num = $("<span class='num'>#" + cnt + "</span>");
            $(this).prepend($num);
            cnt++;
        });
        if ($('html').attr('dark')) {
            $('span.num').css('color', 'white');
        } else {
            $('span.num').css('color', 'black');
        }

        //styling CSS through JS
        $("span.num").css("left", "90px");
        $("span.num").css("position", "absolute");
        $("span.num").css("margin-top", "26px");
        $("span.num").css("font-size", "20px");
    }, 2000);
});
