
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

function pullCart() {
    product_1 = getCookie('product_1')
    product_2 = getCookie('product_2')
    product_3 = getCookie('product_3')
    product_4 = getCookie('product_4')
    product_5 = getCookie('product_5')
    product_6 = getCookie('product_6')
    product_7 = getCookie('product_7')
    product_8 = getCookie('product_8')
    product_9 = getCookie('product_9')
    product_10 = getCookie('product_10')
    product_11 = getCookie('product_11')
    product_12 = getCookie('product_12')
    product_13 = getCookie('product_13')
    
    console.log(product_1)
    console.log(product_2)
    console.log(product_3)
    console.log(product_4)
    console.log(product_5)
    console.log(product_6)
    console.log(product_7)
    console.log(product_8)
    console.log(product_9)
    console.log(product_10)
    console.log(product_11)
    console.log(product_12)
    console.log(product_13)
    
    
    if (product_1 == 0 && product_2 == 0 && product_3 == 0 && product_4 == 0 && product_5 == 0 && product_6 == 0 && product_7 == 0 && product_8 == 0 && product_9 == 0 && product_10 == 0 && product_11 == 0 && product_12 == 0 && product_13 == 0) {
        document.getElementById("noProducts").innerHTML = 'There are no products in your cart.';
    }
    
    if (product_1 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_2 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product2");
        document.getElementById("product2").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_2);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_2 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_3 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_4 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_5 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_6 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_7 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_8 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_9 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_10 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_11 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_12 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    if (product_13 > 0) {
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode('');
        
        node.appendChild(textnode);                                     
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);
        node.setAttribute("id", "product1");
        document.getElementById("product1").innerHTML = '<img src="photos/MSI_Radeon_R9_Fury_X_4GB_Video_Card/81ki9sRvWLL._SL1500_.jpg" alt="MSI Radeon R9 Fury X 4GB Video Card" height="180px"></a>MSI Radeon R9 Fury X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_1);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_1 * 666.98);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
}

