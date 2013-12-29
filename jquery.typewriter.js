(function() {
  $(document).ready(function() {
    $.fn.typewriter = function(options) {
      var n, settings, the_text;
      the_text = this.data('text');
      n = 0;
      settings = $.extend({
        typing_speed: 100,
        delay: 0,
        location: this
      }, options);
      return this.each(function() {
        var writeThis;
        writeThis = function(the_text, n) {
          if (n < the_text.length) {
            $(settings.location).html(the_text.substring(0, n + 1));
            n++;
            return setTimeout((function() {
              return writeThis(the_text, n);
            }), settings.typing_speed);
          }
        };
        return setTimeout((function() {
          return writeThis(the_text, 0);
        }), settings.delay);
      });
    };
    return $(".show_shit_here").typewriter({
      typing_speed: "125",
      delay: 500
    });
  });

}).call(this);
