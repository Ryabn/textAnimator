const TextToSVG = require('text-to-svg');

let svg;
let fonts = ['sourcesanspro-bold', 'Biryani-ExtraBold'];


window.updatedValue = function() {
    let userOptions = {
        'font': fonts[1],
        'fill': '#151515',
        'stroke': generatePastelColor,
        'strokeWidth': 5,
        'fontSize': 200
    }
    generate(document.getElementById('user-input').value, userOptions);
    
}

window.onload = function(){
    updatedValue();
};
function generatePastelColor(){
    return `hsl( ${parseInt(Math.random()*360)}, 60%, 80%)`;
}

function generate(text, {font, fill, stroke, strokeWidth, fontSize}){
    TextToSVG.load(`js/${font}.ttf`, function(err, textToSVG) {
        let full = {};
        for(let i = 0; i < text.length; i++){
            const TTSattributes = {'fill': fill, 'stroke': stroke(), 'stroke-width': strokeWidth };
            const TTSoptions = {'x': 0, 'y': 0, 'fontSize': fontSize, 'anchor': 'top', 'attributes': TTSattributes};    
            let letter = text.substr(i,1);
            full["a" + i] = textToSVG.getSVG(letter, TTSoptions);
        }
        displayPreview(full);
    });
}
function displayPreview(full){
    let all = "";
    Object.values(full).forEach(e => {
        all += e;
    });
    document.getElementById('text-preview').innerHTML = all;
}