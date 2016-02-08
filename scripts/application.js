
function addProduct(productId){
    
    console.log(productId);
    getCookieVal = getCookie(productId);
    console.log(getCookieVal);
    getCookieVal = getCookieVal.split("=");
    numberOfProducts = Number(getCookieVal) + 1;
    console.log(numberOfProducts);
    document.cookie = productId + "=" + numberOfProducts ;
    
    
}

function removeProduct(productId) {
    console.log(productId);
    getCookieVal = getCookie(productId);
    console.log(getCookieVal);
    getCookieVal = getCookieVal.split("=");
    numberOfProducts = Number(getCookieVal) - 1;
    console.log(numberOfProducts);
    document.cookie = productId + "=" + numberOfProducts ;
}