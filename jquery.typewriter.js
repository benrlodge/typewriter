(function() {
  $(document).ready(function() {
    return $.fn.typewriter = function(options) {
      var location, n, settings, the_text;
      the_text = this.data('text');
      location = this;
      n = 0;
      settings = $.extend({
        typing_speed: 100,
        delay: 0,
        random: false,
        randomMax: 400
      }, options);
      return this.each(function() {
        var randMax, speed, typeChar;
        speed = settings.typing_speed;
        randMax = settings.randomMax;
        typeChar = function(the_text, n) {
          if (n < the_text.length) {
            if (settings.random) {
              speed = Math.floor(Math.random() * randMax);
            }
            $(location).html(the_text.substring(0, n + 1));
            n++;
            return setTimeout((function() {
              return typeChar(the_text, n);
            }), speed);
          }
        };
        return setTimeout((function() {
          return typeChar(the_text, 0);
        }), settings.delay);
      });
    };
  });

}).call(this);
