# RapidDOM Library

RapidDOM is a lightweight JavaScript library that allows you to manipulate DOM with just a single line of code, with easy syntax like jQuery. With RapidDOM, you can manipulate DOM, toggle classes, add styles etc. easily.

## Features

- Easy DOM manipulation
- Multiples styles with just one line of code
- Create, Remove, Manipulate DOM elements
- Event listeners support
- Callbacks and custom code

## Getting Started

### Installation

To use RapidDOM in your project, you need to import the RapidDOM module in your JavaScript file. You can do this by adding the following code into your script file:

```javascript
import { $ } from './node_modules/rapid-dom/index.js';
```


## Usage

### Element Manipulation

- Create Element : In this example we are creating ```<h1>``` element inside the ```<body>``` tag
```javascript
$('body').create('h1')
```

- Remove Element : In this example we are removing the ```<h1>``` element
```javascript
$('h1').remove()
```

- Add Content : Adding content ```Hello World!``` inside of ```<h1>``` element
```javascript
$('h1').content('Hello World!');
```

### Styles Manipulation

- Adding styles : Adding multiples styles like text color red, background color green and padding from all sides 10px on the ```<h1>``` element
```javascript
$('h1').styles('color: red; background-color: green; padding: 10px')
```

### Class Manipulation

- Adding class : Adding class named ```my-para``` to all the selected ```<p>``` elements
```javascript
$('p').addClass('my-para')
```

- Removing class : Removing class named ```my-para``` from all the ```<p>``` elements only (If other tags also having this class then this way it will be removed from only ```<p>``` tags)
```javascript
$('p').removeClass('my-para')
```

- Toggle class : Here first we are selecting ```<button>``` element and then toggling class named ```dark-theme``` means if this is exists in ```button``` then it will be removed and if it is not exists then it will be added
```javascript
$('button').toggle('dark-theme')
```

### Attribute Manipulation

- Set Attribute : Here we are selecting ```<img>``` element then setting it's attribute to ```src``` and value as ```https://www.linkedin.com/in/naved-uddin-800241195/```
```javascript
$('img').setAt('src', 'https://www.linkedin.com/in/naved-uddin-800241195/')
```

- Get Attribute : Here the value of the attribute ```src``` of all the ```<img>``` elements will be returned and you can store it in a variable to later use
```javascript
let val = $('img').getAt('src') // Suppose 'https:www.google.com' is returned

console.log(val) // Output : https:www.google.com
```

- Remove Attribute : In this example we are removing ```alt``` attribute from the ```<img>``` elements
```javascript
$('img').removeAt('alt')
```

### Syntax

- Index.js file of your project
```javascript
import { $ } from './node_modules/rapid-dom/index.js'


$('body').create('div') // <div> is created inside body tag

$('div').addClass('container') // Added a class named 'container' in newly created <div>

$('.container').content('Hello World!'); // Added content "Hello World!" inside the <div> by selecting it with it's class

$('.container').style('color: red') // Styled content within "container" class with text color red
```

## Contributing

If you have suggestions for improvements or find any issues, please feel free to open an issue or submit a pull request here : https://github.com/Naved-Uddin9950/rapid-dom

## License

This project is licensed under the MIT License.