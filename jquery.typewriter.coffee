$(document).ready ->


	# jQuery Dots Plugin
	$.fn.typewriter = (options) ->

		the_text = @.data('text')
		n = 0
		
		settings = $.extend(
			typing_speed: 100
			delay: 0
			location: this
			random: false
			randomMax: 400
		, options)

		
		return @each ->

			speed = settings.typing_speed
			randMax = settings.randomMax

			writeThis = (the_text, n) ->

				if n < the_text.length
					speed = Math.floor( Math.random() * randMax ) if settings.random
					$(settings.location).html the_text.substring(0, n + 1)
					n++
					setTimeout (->
						writeThis the_text, n
					), speed

			setTimeout (->
				writeThis the_text, 0
			), settings.delay

	