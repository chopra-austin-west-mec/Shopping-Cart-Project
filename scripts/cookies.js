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
    document.cookie = "numberOfCookies=0";
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

function addProductCookies(productName,description,dateOfPurchase,expirationDate,productNumber) {
  
  var createTable = document.createElement("TR");
  createTable.setAttribute("id","'table" + productNumber + "'");
  
  var node = document.createElement("TD");
  var textnode = document.createTextNode(productName);
  node.appendChild(textnode);
  createTable.appendChild(node);
  document.getElementById("productListTable").appendChild(createTable);
  
  var node = document.createElement("TD");
  var textnode = document.createTextNode(description);
  node.appendChild(textnode);
  createTable.appendChild(node);
  document.getElementById("productListTable").appendChild(createTable);
  
  var node = document.createElement("TD");
  var textnode = document.createTextNode(dateOfPurchase);
  node.appendChild(textnode);
  createTable.appendChild(node);
  document.getElementById("productListTable").appendChild(createTable);
  
  var node = document.createElement("TD");
  var textnode = document.createTextNode(expirationDate);
  node.appendChild(textnode);
  createTable.appendChild(node);
  document.getElementById("productListTable").appendChild(createTable);
  
  var node = document.createElement("TD");
  var htmlNode = document.createElement('button');
  var textnode = document.createTextNode('X');
  htmlNode.appendChild(textnode);
  node.appendChild(htmlNode);
  var ButtonOnClick = htmlNode.setAttribute("onClick", 'removeProduct(' + "'" + productNumber + "'" +')');
  createTable.appendChild(node);
  document.getElementById("productListTable").appendChild(createTable);

}

function addCookies(productName,description,dateOfPurchase,expirationDate,numberOfCookies){
  console.log("adding cookies");
  document.cookie="product" + numberOfCookies + "=" + productName + ", " + description + ", " + dateOfPurchase + ", " + expirationDate;
}