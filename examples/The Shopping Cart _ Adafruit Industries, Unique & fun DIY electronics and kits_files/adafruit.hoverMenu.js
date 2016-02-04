;(function( $, window, document, undefined ){

  var HoverMenu = function( elem, options ){
    //only include elements that contain flyouts
    this.elem = $.grep(elem, function(el) {
      return $(el).data('load') ? true : false;
    });

    this.$elem = $(this.elem);
    this.options = options;

    this.metadata = this.$elem.data( 'plugin-options' );

    this._init = false;
    this.menu_open = false;
    this.menu_timeout = null;
    this.cache_timeout = 30 * 60 * 1000; // 30 mins

    if (this.$elem.length === 0) {
      //no elements to bind to...don't setup menu.
      this._init = true;
    }
  };

  // the plugin prototype
  HoverMenu.prototype = {
    defaults: {
      message: 'Menu Enabled'
    },

    templates: {},

    init: function() {
      if (this._init) {
        return;
      }

      this._init = true;

      // Introduce defaults that can be extended either
      // globally or using an object literal.
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.enable_menu();

      return this;
    },

    enable_menu: function() {
      var that = this;
      var $hover_menu = $(".hover-menu");

      // preload the menu flyouts
      this.$elem.each(function() {
        that.load_menu($(this));
      });

      //use touch events to open and close the hover menu on tablets.
      this.$elem.children('a').bind('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (that.menu_open) {
          that.close_menu.call($(this).parents('li'), that);
        } else {
          that.open_menu.call($(this).parents('li'), that);
        }
      });

      this.$elem.children('a').bind('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });

      $(document).on('touchend', function(event) {
        if (that.menu_open) {

          if (!$hover_menu.is(event.target) && $hover_menu.has(event.target).length === 0) {
              that.close_menu.call($('#navigation ul > li.active'), that);
          }
        }
      });

      this.$elem.hoverIntent({
        interval: 50,
        sensitivity: 5,
        over: function () {
          that.open_menu.call(this, that);
        },

        out: function() {
          that.close_menu.call(this, that);
        }
      });
    },

    load_menu: function($el) {

      var promise = $.Deferred(),
          path = $el.data('load'),
          cached;

      // the element should have a data-load property set
      if(! path)
        return promise.reject();

      // return sessionStorage cache if present
      if(sessionStorage && (cached = sessionStorage.getItem('cache-' + path))) {

        try {

          cached = JSON.parse(cached);

          if(cached.timestamp && Date.now() < cached.timestamp) {
            return promise.resolve(cached.data);
          }

        } catch(e) {}

      }

      // make a request for the flyout if needed
      $.get(path).then(function(data) {

        // cache the flyout in session storage
        if(sessionStorage) {
          sessionStorage.setItem('cache-' + path, JSON.stringify({
            timestamp: Date.now() + this.cache_timeout,
            data: data
          }));
        }

        promise.resolve(data);

      }.bind(this));

      return promise;

    },

    render_menu: function($el) {

      var promise = $.Deferred();

      if($el.data('rendered'))
        return promise.resolve();

      this.load_menu($el).then(function(data) {
        $el.append(data);
        $el.data('rendered', true);
        promise.resolve();
      });

      return promise;

    },

    open_menu: function(that) {

      var el = this,
          $el = $(el);

      window.clearTimeout(that.menu_timeout);

      $('#navigation ul > li').removeClass('active');
      $el.addClass('active');

      that.render_menu($el).then(function() {

        var $flyout = $('.flyout', el);

        if (that.menu_open) {
          $('.flyout.active').stop(true, true).hide().removeClass('active');
          $flyout.show();
          $flyout.addClass('active');
        } else {
          that.menu_open = true;
          $flyout.addClass('active');
          $flyout.slideDown(50, function() {
            $el.stop(true, true);
          });
        }

      });

    },

    close_menu: function(that) {
      var hover_element = this;

      window.clearTimeout(that.menu_timeout);
      that.menu_timeout = setTimeout(function() {
        $('.flyout', hover_element).slideUp(50, function() {
          $('#navigation ul > li').removeClass('active');
          $('.flyout.active').removeClass('active');
          that.menu_open = false;
          $(hover_element).stop(true,true);
        });
      }, 600);
    }
  };

  HoverMenu.defaults = HoverMenu.prototype.defaults;

  $.fn.hover_menu = function(options) {
    return new HoverMenu(this, options).init();
  };

})( jQuery, window , document );