(function() {
  $(document).ready(function() {
    var log;
    log = function(m) {
      return console.log(m);
    };
    return $.fn.typewriter = function(options) {
      var loadRandom, location, n, settings, the_text;
      the_text = this.data('text');
      location = this;
      n = 0;
      settings = $.extend({
        typing_speed: 100,
        delay: 0,
        random: false,
        randomMax: 400
      }, options);
      loadRandom = function(params) {
        var i, rand, speedRand;
        speedRand = [];
        i = 0;
        while (i < params.text_len) {
          rand = Math.floor(Math.random() * params.randMax);
          if (rand < 100) {
            continue;
          }
          speedRand.push(rand);
          i++;
        }
        return speedRand;
      };
      return this.each(function() {
        var params, speed, speedRandArray, typeChar;
        speed = settings.typing_speed;
        if (settings.randomMax < 101) {
          settings.randomMax = 101;
        }
        params = {
          speed: settings.typing_speed,
          randMax: settings.randomMax,
          text_len: the_text.length
        };
        if (settings.random) {
          speedRandArray = loadRandom(params);
        }
        typeChar = function(the_text, n) {
          if (n < the_text.length) {
            if (settings.random) {
              speed = speedRandArray[n];
            }
            $(location).html(the_text.substring(0, n + 1));
            n++;
            setTimeout((function() {
              return typeChar(the_text, n);
            }), speed);
            return log(speed);
          }
        };
        return setTimeout((function() {
          return typeChar(the_text, 0);
        }), settings.delay);
      });
    };
  });

}).call(this);
