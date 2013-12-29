$(document).ready ->


	# jQuery Dots Plugin
	$.fn.typewriter = (options) ->

		the_text = @.data('text')
		location = this
		n = 0
		
		settings = $.extend(
			typing_speed: 100
			delay: 0
			random: false
			randomMax: 400
		, options)

		
		return @each ->

			speed = settings.typing_speed
			randMax = settings.randomMax

			typeChar = (the_text, n) ->

				if n < the_text.length
					speed = Math.floor( Math.random() * randMax ) if settings.random
					$(location).html the_text.substring(0, n + 1)
					n++
					setTimeout (->
						typeChar the_text, n
					), speed

			setTimeout (->
				typeChar the_text, 0
			), settings.delay

	