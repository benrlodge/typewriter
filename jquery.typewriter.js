(function() {
  $(document).ready(function() {
    return $.fn.typewriter = function(options) {
      var n, settings, the_text;
      the_text = this.data('text');
      n = 0;
      settings = $.extend({
        typing_speed: 100,
        delay: 0,
        location: this,
        random: false,
        randomMax: 400
      }, options);
      return this.each(function() {
        var randMax, speed, writeThis;
        speed = settings.typing_speed;
        randMax = settings.randomMax;
        writeThis = function(the_text, n) {
          if (n < the_text.length) {
            if (settings.random) {
              speed = Math.floor(Math.random() * randMax);
            }
            $(settings.location).html(the_text.substring(0, n + 1));
            n++;
            return setTimeout((function() {
              return writeThis(the_text, n);
            }), speed);
          }
        };
        return setTimeout((function() {
          return writeThis(the_text, 0);
        }), settings.delay);
      });
    };
  });

}).call(this);
