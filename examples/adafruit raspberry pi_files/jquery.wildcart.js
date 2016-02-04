/*!
 * jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
 * Author: @addyosmani
 * Further changes: @peolanha
 * Licensed under the MIT license
 */


;(function ( $, window, document, undefined ) {


    $.wildCart = {
        'tldn' : location.host.replace('learn', 'www').replace('forums', 'www'),
        'wildCartServer' : 'http'+(window.location.protocol === 'https:' ? 's' : '' )+'://' + location.host.replace('learn', 'www').replace('forums', 'www') + '/api/wildCart.php',
        'cart': {
        },
        'cart_totals': {
        },
        'cart_subscribers' : Array(),
        updateCart : function(data){
            this.cart = data['cart'];
            this.updateCartTotals();
            for (var index in this.cart_subscribers){
                _self = this.cart_subscribers[index];
                _self.options.cartUpdated.call(_self.element, {'cart' : this.cart, 'cart_totals' : this.cart_totals, 'carrot_text' : data['full_cart']['carrot_text']} );
            }
            $.cookie('wishlist', data['wishlist'], { path : '/', domain: $.wildCart.tldn.replace('www', '')});
       },
        updateCartTotals : function(){
            cart_count = 0;
            this.cart_totals['items'] = 0;
            for ( var pid in cart ){
                this.cart_totals['items'] += parseInt(cart[pid]['qty'], 10);
                cart_count += parseInt(cart[pid]['qty'], 10);
            }
            $.cookie('cart_count', cart_count, { path : '/', domain: $.wildCart.tldn.replace('www', '')});
        }
    };

    $.widget( "wildCart.addToCart" , {

        //Options to be used as defaults
        options: {
            qty: 1,
            success_template : 'Added to cart!',
            return_full_cart : 0,
            onAdded : function(data){
                alert('You need to set an onAdded callback function for this element!');
            },
            updateCart : function(event, cart){
                $.wildCart.updateCart(cart);
            },
            cartUpdated: function(data){
                alert('you need to create a cartUpdated callback to bind to this element');
            }
        },

        _create: function () {
            $.wildCart.cart_subscribers.push(this);
            this.options.pid = this.element.data("pid");
            this.options.multi_add = this.element.data("multi-add");
            // default qty to 1

            if( typeof this.element.data("qty-source") !== 'undefined'){
                this.options.qty = $(this.element.data("qty-source")).val();
            }
            else if(typeof this.element.data("qty") !== 'undefined'){
                this.options.qty = this.element.data("qty");
            }

            this.options.source_page = this.element.data("source-name");
            this.options.guide_id = this.element.data("guide-id");

            // events
            var self = this;
            self.element.click(function(e){
                if ("withCredentials" in new XMLHttpRequest()){
                    self._ajaxAdd(self.options.onAdded);
                    e.stopPropagation();
                    e.preventDefault();
                }
            });

        },

        destroy: function () {
            $.Widget.prototype.destroy.call(this);
        },

        _ajaxAdd: function(onSuccess){
            var self = this;
            if( typeof this.element.data("qty-source") !== 'undefined'){
                this.options.qty = $(this.element.data("qty-source")).val();
            }
            extended_data = {
                'action' : 'add_to_cart',
                'multi_add' : this.options.multi_add,
                'pid' : this.options.pid,
                'qty' : this.options.qty,
                'return_full_cart' : this.options.return_full_cart,
                'source_page' : this.options.source_page,
                'source_id' : this.options.source_id,
                'guide_id' : this.options.guide_id
            };
            if(typeof $.cookie('zenid') !== 'undefined'){
                extended_data['zenid'] = $.cookie('zenid');
            }

            $.ajax({
                url: $.wildCart.wildCartServer,
                accept: 'application/json',
                crossDomain: true,
                cache: false,
                type: 'POST',
                xhrFields: {
                    withCredentials: true
                    },
                data : extended_data,
                error: function(jqXHR, textStatus, errorThrown){
                    console.log(' :( ' +  textStatus.toUpperCase()  + ' -- for ajaxAdd() : jqXHR.statusText = ' + jqXHR.statusText + ', textStatus = ' + textStatus);
                },
                success: function(data, textStatus, jqXHR){
                    if(typeof data['zenid'] !== 'undefined')
                        $.cookie('zenid', data['zenid'], { path : '/', domain: $.wildCart.tldn.replace('www', '')});
                    onSuccess.call(self.element, data);
                    cart = data['cart'];
                    self._trigger('updateCart', self, data);
                }

            });

        },


        // boilerplate code! not using this yet, as it turns out.
        // Respond to any changes the user makes to the 
        // option method
        _setOption: function ( key, value ) {
            switch (key) {
                default:
                break;
            }
            $.Widget.prototype._setOption.apply( this, arguments );
        }
    });


    $.widget( "wildCart.shoppingCartTag" , {

        options : {
            cartUpdated: function(){
                alert('you need to create a cartUpdated callback to bind to this element');
            }
        },

        _create: function () {
            $.wildCart.cart_subscribers.push(this);
        },

        destroy: function () {
            $.Widget.prototype.destroy.call(this);
        },

        // boilerplate code! not using this yet, as it turns out.
        // Respond to any changes the user makes to the 
        // option method
        _setOption: function ( key, value ) {
            switch (key) {
            default:
                break;
            }
            $.Widget.prototype._setOption.apply( this, arguments );
        }
    });

})( jQuery, window, document );

