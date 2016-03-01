function addProduct(productId, amount){
    
    console.log(productId);
    getCookieVal = getCookie(productId);
    console.log(getCookieVal);
    getCookieVal = getCookieVal.split("=");
    numberOfProducts = Number(getCookieVal) + amount;
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
        document.getElementById("product2").innerHTML = '<img src="photos/VisionTek_Radeon_R9_Nano_4GB_Video_Card/61Qn1K4LaSL._SL1200_.jpg" alt="VisionTek Radeon R9 Nano 4GB Video Card" height="180px"></a>VisionTek Radeon R9 Nano 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_2);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_2 * 582.06 );            //then create a Text node
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
        node.setAttribute("id", "product3");
        document.getElementById("product3").innerHTML = '<img src="photos/XFX_Radeon_R9_Fury_4GB_Triple_Dissipation_Video_Card/81fpc-ONzGL._SL1500_.jpg" alt="XFX Radeon R9 Fury 4GB Triple Dissipation Vid" height="180px"></a>XFX Radeon R9 Fury 4GB Triple Dissipation Vid'
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_3);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_3 * 514.98);            //then create a Text node
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
        node.setAttribute("id", "product4");
        document.getElementById("product4").innerHTML = '<img src="photos/Asus_Radeon_R9_390_8GB_Video_Card/91CO4TAv91L._SL1500_.jpg" alt="Asus Radeon R9 390 8GB Video Card" height="180px"></a>Asus Radeon R9 390 8GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_4);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_4 * 481.92);            //then create a Text node
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
        node.setAttribute("id", "product5");
        document.getElementById("product5").innerHTML = '<img src="photos/XFX_Radeon_R9_295X2_8GB_Core_Edition_Video_Card/610F2UQ2ABL._SL1000_.jpg" alt="XFX Radeon R9 295X2 8GB Core Edition Video Card" height="180px"></a>XFX Radeon R9 295X2 8GB Core Edition Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_5);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_5 * 1981.13);            //then create a Text node
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
        node.setAttribute("id", "product6");
        document.getElementById("product6").innerHTML = '<img src="photos/MSI_Radeon_R9_290X_4GB_TWIN_FROZR_Video_Card/61e4IiM1wGL._SL1000_.jpg" alt="MSI Radeon R9 290X 4GB TWIN FROZR Video Card" height="180px"></a>MSI Radeon R9 290X 4GB TWIN FROZR Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_6);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_6 * 495.02);            //then create a Text node
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
        node.setAttribute("id", "product7");
        document.getElementById("product7").innerHTML = '<img src="photos/Diamond_Radeon_R9_290X_4GB_Video_Card/618Jgfj7enL._SL1000_.jpg" alt="Diamond Radeon R9 290X 4GB Video Card" height="180px"></a>Diamond Radeon R9 290X 4GB Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_7);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_7 * 641.81);            //then create a Text node
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
        node.setAttribute("id", "product8");
        document.getElementById("product8").innerHTML = '<img src="photos/MSI_Radeon_R9_290X_4GB_LIGHTNING_Video_Card/611KZ3ss6fL._SL1000_.jpg" alt="MSI Radeon R9 290X 4GB LIGHTNING Video Card" height="180px"></a>MSI Radeon R9 290X 4GB LIGHTNING Video Card '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_8);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_8 * 625.06);            //then create a Text node
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
        node.setAttribute("id", "product9");
        document.getElementById("product9").innerHTML = '<img src="photos/ultimaker2/2.jpg" alt="ULTIMAKER 2+" height="180px"></a>ULTIMAKER 2+ '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_9);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_9 * 2499.00);            //then create a Text node
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
        node.setAttribute("id", "product10");
        document.getElementById("product10").innerHTML = '<img src="photos/ultimaker2Extended/2.jpg" alt="ULTIMAKER 2 EXTENDED+" height="180px"></a>ULTIMAKER 2 EXTENDED+ '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_10);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_10 * 2999.00);            //then create a Text node
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
        node.setAttribute("id", "product11");
        document.getElementById("product11").innerHTML = '<img src="photos/cubicon/cubicon-single.jpg" alt="Cubicon 3DP" height="180px"></a>Cubicon 3DP '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_11);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_11 * 2599.00);            //then create a Text node
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
        node.setAttribute("id", "product12");
        document.getElementById("product12").innerHTML = '<img src="photos/makerBotReplicator/MakerBot-Replicator-Desktop-3D-Printer.jpg" alt="MAKERBOT REPLICATOR" height="180px"></a>MAKERBOT REPLICATOR '
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(product_12);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode("$" + product_12 * 2899.99);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node);
        document.getElementById("cartList").appendChild(createTable);  //Finally append the TD node to the table
        
    }
    
    document.getElementById("amount").innerHTML = Number(product_1) + Number(product_2) + Number(product_3) + Number(product_4) + Number(product_5) + Number(product_6) + Number(product_7) + Number(product_8) + Number(product_9) + Number(product_10) + Number(product_11) + Number(product_12)
    
}

