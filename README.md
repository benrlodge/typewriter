# jquery.typewriter.js

A simple, lightweight jQuery plugin for animating text, giving it a typewriter effect. 
See a demo at <a href="http://http://www.benrlodge.com/apps/typewriter">benrlodge.com/apps/typewriter</a>.

## Installation
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="/path/to/jquery.typewriter.js"></script>
```

## Usage


Toss in your html

```html
<div class="show_stuff_here" data-text="This is the text to be animated"></div>
```

Toss in the js

```javascript
$("#show_stuff_here").typewriter({
	typing_speed: 400
});
```

### Randomize Mode
If you would like to add a more realistic typing speed effect, i.e., not all characters are "typed" at the same speed - you can use the randomize mode. Just set random to true, and set the randomMax value to the slowest speed you want to allow typed (in milliseconds). Each character will receive a random number in milliseconds from 100 to the max you set.

```javascript
$("#show_stuff_here").typewriter({
	random: true,
	randomMax: 800
});
```



## All Options

```javascript
typing_speed: 400 (number) // steady speed of letters typed (not needed if random)
random: true or false (boolean) // randomize the speed of letters typed
randomMax: 800 (number) // maximum number in milliseconds for random setting (random from 0 to this number)
delay: 400 (number) //a setTimout delay before typing begins

```