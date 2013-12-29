# jquery.typewriter

A simple, lightweight jQuery plugin for animating text, giving it a typewriter effect

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
$("#show_stuff_here").typewriter();
```

## All Options

```javascript
typing_speed: 400 (number) // steady speed of letters typed
random: true or false (boolean) // randomize the speed of letters typed
randomMax: 800 (number) // maximum number in milliseconds for random setting (random from 0 to this number)
delay: 400 (number) //setTimout delay

```