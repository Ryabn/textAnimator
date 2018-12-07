const TextToSVG = require('text-to-svg');
// const textToSVG = TextToSVG.loadSync();
 
// const attributes = {fill: 'red', stroke: 'black'};
// const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
 
// const svg = textToSVG.getSVG('hello', options);
 

window.onload = function(){
    const textToSVG = TextToSVG.loadSync();
    const svg = textToSVG.getSVG('hello');
    console.log(svg);
};