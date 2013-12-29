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
<div class="show_stuff_here" data-text="This is the text to animate"></div>
```

Toss in some js

```javascript
$(".show_stuff_here").typewriter({ typing_speed: '100', location: '.here', delay: 0 });
```

All options
...coming soon

## Settings

```javascript
typing_speed: 400 (number) // speed of letters typed
delay: 400 (number) //setTimout delay
```