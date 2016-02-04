/* Product Variations */
var baseProduct = {};

function updateSelectedVariation(parent, variation, id) {
	if(typeof(parent) == 'undefined') {
		parent = $('body');
	}
	else {
		parent = $(parent);
	}

	if (typeof id == 'undefined') {
		id = '';
	}

	if(typeof(baseProduct.price) == 'undefined') {
		if($('.AddCartButton', parent).css('display') == "none") {
			var cartVisible = false;
		}
		else {
			var cartVisible = true;
		}

		var stockMessageVisible = false;
		if($('.OutOfStockMessage', parent).css('display') != 'none') {
			stockMessageVisible = true;
		}

		var price;
		$('.VariationProductPrice', parent).each(function(){
			var $$ = $(this);
			if ($$.is('input')) {
				price = $$.val();
			} else {
				price = $$.html();
			}
		});

		baseProduct = {
			saveAmount: $.trim($('.YouSaveAmount', parent).html()),
			price: $.trim(price),
			sku: $.trim($('.VariationProductSKU', parent).html()),
			weight: $.trim($('.VariationProductWeight', parent).html()),
			thumb: $.trim($('.ProductThumbImage img', parent).attr('src')),
			cartButton: cartVisible,
			stockMessage: stockMessageVisible,
			stockMessageText: $('.OutOfStockMessage', parent).html()
		};
	}

	// Show the defaults again
	if(typeof(variation) == 'undefined') {
		$('.WishListVariationId', parent).val('');
		$('.CartVariationId', parent).val('');
		if(baseProduct.saveAmount) {
			$('.YouSave', parent).show();
			$('.YouSaveAmount').html(baseProduct.saveAmount);
		} else {
			$('.YouSave', parent).hide();
		}
		$('.VariationProductPrice', parent).each(function(){
			var $$ = $(this);
			if ($$.is('input')) {
				$$.val(baseProduct.price);
			} else {
				$$.html(baseProduct.price);
			}
		});
		$('.VariationProductSKU', parent).html(baseProduct.sku);
		$('.VariationProductWeight', parent).html(baseProduct.weight);
		$('.ProductThumbImage img', parent).attr('src', baseProduct.thumb);
		$(parent).attr('currentVariation', '');
		$(parent).attr('currentVariationImage', '')
		if(baseProduct.sku == '') {
			$('.ProductSKU', parent).hide();
		}
		if(baseProduct.cartButton) {
			$('.AddCartButton', parent).show();
			if(typeof ShowAddToCartQtyBox != 'undefined' && ShowAddToCartQtyBox=='1') {
				$('.QuantityInput', parent).show();
			}
		}

		if(baseProduct.stockMessage) {
			$('.OutOfStockMessage', parent)
				.show()
				.html(baseProduct.stockMessageText)
			;
		}
		else {
			$('.OutOfStockMessage').hide();
		}

		$('.InventoryLevel', parent).hide();
	}
	// Otherwise, showing a specific variation
	else {
		$('.WishListVariationId', parent).val(id);
		$('.CartVariationId', parent).val(id);

		$('.VariationProductPrice', parent).each(function(){
			var $$ = $(this),
				price = baseProduct.price;

			if (variation.price !== undefined) {
				price = variation.price;
			}

			if ($$.is('input')) {
				$$.val(price.replace(/[^0-9\.,]/g, ''));
			} else {
				$$.html(price);
			}
		});

		if(variation.sku != '') {
			$('.VariationProductSKU', parent).html(variation.sku);
			$('.ProductSKU', parent).show();
		}
		else {
			$('.VariationProductSKU', parent).html(baseProduct.sku);
			if(baseProduct.sku) {
				$('.ProductSKU', parent).show();
			}
			else {
				$('.ProductSKU', parent).hide();
			}
		}
		$('.VariationProductWeight', parent).html(variation.weight);
		if(variation.instock == true) {
			$('.AddCartButton', parent).show();
			if(typeof ShowAddToCartQtyBox != 'undefined' && ShowAddToCartQtyBox=='1') {
				$('.QuantityInput', parent).show();
			}
			$('.OutOfStockMessage', parent).hide();
		}
		else {
			$('.AddCartButton, .QuantityInput', parent).hide();
			$('.OutOfStockMessage', parent).html(lang.VariationSoldOutMessage);
			$('.OutOfStockMessage', parent).show();
		}
		if(variation.thumb != '') {
			ShowVariationThumb = true;
			$('.ProductThumbImage img', parent).attr('src', variation.thumb);
			$(parent).attr('currentVariation', id);
			$(parent).attr('currentVariationImage', variation.image);

			$('.ProductThumbImage a').attr("href", variation.image);
		}
		else {
			$('.ProductThumbImage img', parent).attr('src', baseProduct.thumb);
			$(parent).attr('currentVariation', '');
			$(parent).attr('currentVariationImage', '')
		}
		if(variation.stock && parseInt(variation.stock)) {
			$('.InventoryLevel', parent).show();
			$('.VariationProductInventory', parent).html(variation.stock);
		}
		else {
			$('.InventoryLevel', parent).hide();
		}
		if(variation.saveAmount) {
			$('.YouSave', parent).show();
			$('.YouSaveAmount').html(variation.saveAmount);
			$('.RetailPrice').show();
		} else {
			$('.YouSave', parent).hide();
			$('.RetailPrice').hide();
		}
	}
}

function CheckEventDate() {

	var result = true;

	if(typeof(eventDateData) == 'undefined') {
		return true;
	}

	if ($('#EventDateDay').val() == -1 || $('#EventDateMonth').val() == -1 || $('#EventDateYear').val() == -1) {
		alert(eventDateData['invalidMessage']);
		return false;
	}

	if (eventDateData['type'] == 1) {
		if (new Date($('#EventDateYear').val()+'/'+$('#EventDateMonth').val()+'/'+$('#EventDateDay').val()) > new Date(eventDateData['compDateEnd'])
		 || new Date($('#EventDateYear').val()+'/'+$('#EventDateMonth').val()+'/'+$('#EventDateDay').val()) < new Date(eventDateData['compDate'])
		) {
			result = false;
		}

	} else if (eventDateData['type'] == 2) {
		if (new Date($('#EventDateYear').val()+'/'+$('#EventDateMonth').val()+'/'+$('#EventDateDay').val()) < new Date(eventDateData['compDate'])) {
			result = false;
		}

	} else if (eventDateData['type'] == 3) {
		if (new Date($('#EventDateYear').val()+'/'+$('#EventDateMonth').val()+'/'+$('#EventDateDay').val()) > new Date(eventDateData['compDate'])) {
			result = false;
		}
	} else {
		result = true;
	}

	if (!result) {
		alert(eventDateData['errorMessage']);
	}
	return result;
}

function selectCurrentVideo (videoId) {
	$('.currentVideo').removeClass('currentVideo');
	$('#video_' + videoId).addClass('currentVideo');
}

function showVideoPopup(videoId) {
	var l = (screen.availWidth/2)-250;
	var t = (screen.availHeight/2)-200;
	window.open(config.ShopPath + "/productimage.php?video_id="+videoId, "imagePop", "toolbar=0,scrollbars=1,location=0,statusbar=1,menubar=0,resizable=1,width=530,height=430,top="+t+",left="+l);
}

function updatePinterestMediaLink(image) 
{
	var src = $('.PinterestButtonContainer > a').attr('href');
	if (typeof src != 'undefined') {
		var newsrc = src.replace(new RegExp('&media=([^&]+)'), '&media=' + image);
		$('.PinterestButtonContainer > a').attr('href', newsrc);
	}
}