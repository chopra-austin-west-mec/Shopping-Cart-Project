function isFirstTime() {
  var firstTime = getCookie("firstTime");
  if (firstTime == "NO") {
    console.log("this is not their first time");
    var numberOfCookies = Number(getCookie("numberOfCookies"));
    if (numberOfCookies > 0) {
      console.log("there are " + numberOfCookies + " cookies in the cookie jar");
      grabAllCookies();
    }
    else{
      console.log("there are no cookies in the cookie jar");
    }
  }
  else{
    console.log("this is their first time");
    document.cookie = "firstTime=NO";
    document.cookie = "userId=" + (Math.random() * 3  * Math.random() * 6 * Math.random() * 8 );
    
    document.cookie = "product_1=0";
    document.cookie = "product_2=0";
    document.cookie = "product_3=0";
    document.cookie = "product_4=0";
    document.cookie = "product_5=0";
    document.cookie = "product_6=0";
    document.cookie = "product_7=0";
    document.cookie = "product_8=0";
    document.cookie = "product_9=0";
    document.cookie = "product_10=0";
    document.cookie = "product_11=0";
    document.cookie = "product_12=0";
    document.cookie = "product_13=0";
  }
}

function getCookie(cname) {
  var cookies = document.cookie;
  cookies = cookies.split("; ");
  
  for (var i=0; i < cookies.length; i++) {
    cookies2 = cookies[i].split('=');
    if (cookies2[0] == cname) {
      i = cookies.lenght + 1;
      result = cookies2[1];
      return cookies2[1];
    }
  }
}

function grabAllCookies() {
  var numberOfCookies = getCookie("numberOfCookies");
  console.log("grabbing  all cookies")
  
  for (i = 0; i < numberOfCookies; i++) {
    var productCookie = 'product' + (i +1);
    breakCookie(productCookie);
  }
}

function breakCookie(productValues) {
  console.log("crumbling cookies")
  
  var cookies = document.cookie;
  cookies = cookies.split("; ");
  
  for (var i=0; i < cookies.length; i++) {
    cookies2 = cookies[i].split('=');
    var productNumber = cookies2[0];
    if (cookies2[0] == productValues) {
      i = cookies.lenght + 1;
      productToAdd =  cookies2[1];
      var values = productToAdd.split(", ");
      addProductCookies(values[0],values[1],values[2],values[3],productNumber);
    }
  }
}
