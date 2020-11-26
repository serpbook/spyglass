var unranked = '';
if(window.location.href.includes('&unranked')){
  unranked = '<br><br><font color=crimson>We did not find your site ranking for the keyword. This is the first page of the results.</font>';
}
if(gmb.length == 0){
  unranked += '<br><br><font color=crimson><strong>No GMB name found</strong>. Have you added the correct <a href=\"https://support.keyword.com/en/articles/4374805-tracking-by-location-google-maps\"><u>GMB Name</u></a>?</font>';
}else{
  echo "unranked += '<br><br><font color=crimson>We are tracking the GMB name:<br><code>$gmb</code><br><br>Is this correct?</font>';";
}

$("#spyglass").append(unranked + '<br><br><a target="_blank" href="' + window.location.href + '&debug"><small><u>View Keyword Settings</u></small></a>');

  window.onbeforeunload = function () {
       return "Would you like to leave?";
  }
