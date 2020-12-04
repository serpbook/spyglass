var unranked = '';
if(window.location.href.includes('&unranked')){
  unranked = '<br><br><font color=crimson>We did not find your site ranking for the keyword. This is the first page of the results.</font>';
}
if(gmb.length == 0){
  unranked += '<br><br><font color=crimson><strong>No GMB name found</strong>. Have you added the correct <a href=\"https://support.keyword.com/en/articles/4374805-tracking-by-location-google-maps\"><u>GMB Name</u></a>?</font>';
}else{
  echo "unranked += '<br><br><font color=crimson>We are tracking the GMB name:<br><code>$gmb</code><br><br>Is this correct?</font>';";
}

$('#rhs').html('<p id="spyglass" style="background-color: #ffffff;color: #8495b1;line-height: 22px;text-align:  center;padding: 25px;border-top: 1px dashed #ccc;border-bottom: 1px dashed #ccc;"><img src="https://keyword.com/img/google-map.png" style="height: 80px;"><br><br>This is the page we found on the day of the ranking update. Please note that the current live page may differ, depending on which datacenter you are connected to. Links will not work on this page.<br><br><img src="https://keyword.com/serp/images/keyword-logo.svg" width="20" data-atf="0"></p>' + unranked + '<br><br><a target="_blank" href="' + window.location.href + '&debug"><small><u>View Keyword Settings</u></small></a>');

window.onbeforeunload = function () {
     return "Would you like to leave?";
}


//hides top menu bar
$('#sfcnt').hide();
