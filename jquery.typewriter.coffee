$(document).ready ->

	log = (m) ->
		console.log m

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


		loadRandom = (params) ->
			speedRand = []		
			i = 0

			while i < params.text_len
				rand = Math.floor( Math.random() * params.randMax )
				if rand < 100
					continue
				speedRand.push(rand)
				i++

			return speedRand
		


		return @each ->
			speed = settings.typing_speed

			settings.randomMax = 101 if settings.randomMax < 101		

			params =
				speed 		: settings.typing_speed	
				randMax 	: settings.randomMax
				text_len	: the_text.length	



			speedRandArray = loadRandom(params) if settings.random


			typeChar = (the_text, n) ->

				if n < the_text.length
					
					speed = speedRandArray[n] if settings.random
					$(location).html the_text.substring(0, n + 1)
					n++

					setTimeout (->
						typeChar the_text, n
					), speed
					log speed

			setTimeout (->
				typeChar the_text, 0
			), settings.delay

	