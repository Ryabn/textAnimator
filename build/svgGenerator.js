const TextToSVG = require('text-to-svg');
let fonts = ['SourceSansPro-Bold', 'Biryani-ExtraBold'];

let svggenerator = {
}

function generateText(text) {
    let userOptions = {
        'font': fonts[1],
        'fill': '#151515',
        'stroke': '#667766',
        'strokeWidth': 5,
        'fontSize': 200
    }
    generate(text, userOptions);
    //document.getElementById('view__text-input').value
}

export {svggenerator};