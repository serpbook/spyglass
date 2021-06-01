# What is this?

We report keyword rankings to the users that they are tracking.

Within the user interface, they are able to click to see the HTML file of what we see, to verify their rankings.

<img width="536" alt="Screen Shot 2021-06-01 at 2 19 08 PM" src="https://user-images.githubusercontent.com/45627908/120378671-550a4300-c2e4-11eb-8753-7f7956828b78.png">

This will show an HTML file we call the ***Spyglass***:

<img width="443" alt="Screen Shot 2021-06-01 at 2 17 48 PM" src="https://user-images.githubusercontent.com/45627908/120378631-49b71780-c2e4-11eb-9b46-591d067919ed.png">

#### Source
>https://keyword.com/serp/spyglass?kwid=177988186|1698fb752ebd10b8c8da55375885bd60&ranking=2


We can enhance the experience of the **Spyglass** page, by injecting certain Javascript functions, after loading the HTML.

### Features for each device:

##### Finding and highlighting where their website is
##### Auto-scrolling to their tracked website

<img width="541" alt="Screen Shot 2021-06-01 at 2 21 29 PM" src="https://user-images.githubusercontent.com/45627908/120378906-a87c9100-c2e4-11eb-9197-f5ce2be6f3a9.png">

##### Auto-numbering SERP results
<img width="103" alt="Screen Shot 2021-06-01 at 2 21 43 PM" src="https://user-images.githubusercontent.com/45627908/120378951-b16d6280-c2e4-11eb-9099-87490b384251.png">

##### Auto hiding popups
<img width="393" alt="Screen Shot 2021-06-01 at 2 22 07 PM" src="https://user-images.githubusercontent.com/45627908/120379002-c0541500-c2e4-11eb-8d33-02b134164057.png">

# How this works

Javascript is injected at the footer of the HTML page, to pass the individual keyword values to the script:

```
<script>
  var nearvalue ="";
  var rankingurl="https://serpbook.com/";
  var ignore_local=1;
  var in_local_pack=0;
  var page_ranking ="1";
  var gmb= "";
</script>
<script src="https://raw.githack.com/serpbook/spyglass/main/mobile.js"></script>
```

Depending on which device the user is tracking, the device-specific Javascript is injected. For example, in the example above you see: **[mobile.js](https://github.com/serpbook/spyglass/blob/main/mobile.js)**
