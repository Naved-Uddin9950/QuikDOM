import { $ } from './index.js';

$('body').create('p')
$('body').create('p')
$('body').create('p')
$('p').addClass('para')
$('body').create('p')
$('body').create('p')
$('body').create('p')

$('p').content('Hello World!');

// let cont = $('p').contentg('yo');
// console.log(cont);

$('body').create('a');
$('a').content(`Click me too <br><br>`)
$('a').setAt('href', '#');

$('body').create('button');
$('body').create('button');
$('body').create('button');

$('button').content('Click Me')

$('a').click('all', (e) => {
    e.preventDefault();
    console.log('Konnichiwa minna san !');
})