

$(document).ready(function(){

    $(".ec_click_product").click(
        function(e){
            var _this = $(this);
            ga( 'ec:addProduct', {
                'id': 'P' + $(this).data('pid'),
                'name': $(this).data('name').replace(/'/g, "\\'"),
                'position': $(this).data('position')
              });
            ga('ec:setAction', 'click', {list: $(this).data('listname')});


            ga('send', 'event', 'UX', 'click', 'Results', {
                useBeacon: true
            });
        }
    );


    $('.add_to_cart_ec').click(function(e){
        var _this = $(this);
        ga('ec:addProduct', {
            'id': 'P' + $(this).data('pid'),
            'name': $(this).data('name').replace(/'/g, "\\'"),
            'category': $(this).data('crumbs'),
            'quantity': $(this).data('qty')
        });
        ga('ec:setAction', 'add');
        ga('send', 'event', 'UX', 'click', 'add to cart', {
            useBeacon: true
        });
    });

    $('.add_to_cart_ec_nobeacon').click(function(e){
        ga('ec:addProduct', {
            'id': 'P' + $(this).data('pid'),
            'name': $(this).data('name').replace(/'/g, "\\'"),
            'quantity': $(this).data('qty')
        });
        ga('ec:setAction', 'add');
        ga('send', 'event', 'UX', 'click', 'add to cart');
    });
});




