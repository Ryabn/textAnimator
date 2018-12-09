const TextToSVG = require('text-to-svg');
const ClipboardJS = require("clipboard");
const anime = require('animejs');

let fonts = ['SourceSansPro-Bold', 'Biryani-ExtraBold'];

window.updatedValue = function() {
    let userOptions = {
        'font': fonts[1],
        'fill': '#151515',
        'stroke': '#667766',
        'strokeWidth': 5,
        'fontSize': 200
    }
    generate(document.getElementById('view__text-input').value, userOptions);
}

window.onload = function(){
    // test();
    var clipboard = new ClipboardJS('.btn');
    updatedValue();
};

function generatePastelColor(){
    return `hsl( ${parseInt(Math.random()*360)}, 60%, 80%)`;
}

function generate(text, {font, fill, stroke, strokeWidth, fontSize}){
    TextToSVG.load(`fonts/${font}.ttf`, function(err, textToSVG) {
        let full = {};
        for(let i = 0; i < text.length; i++){
            let charColor = generatePastelColor();
            const TTSattributes = {
                // 'fill': charColor,
                'fill': fill,
                'stroke': charColor,
                'stroke-width': strokeWidth,
                'stroke-dasharray': 150,
                'style' : 'stroke-dashoffset: 150px',
            };
            const TTSoptions = {
                'x': 0, 
                'y': 0, 
                'fontSize': fontSize, 
                'anchor': 'top', 
                'attributes': TTSattributes,
            };    
            let letter = text.substr(i,1);
            full["a" + i] = textToSVG.getSVG(letter, TTSoptions);
        }
        displayPreview(full);
    });
}
function displayPreview(full){
    let generatedCode = "";
    Object.values(full).forEach(e => {
        generatedCode += e;
    });
    document.getElementById('view__text-preview').innerHTML = generatedCode;
    // document.getElementById('code-preview__body').textContent = generatedCode;
    line();
    previewCode();
}

function line(){
    var lineDrawing = anime({
        targets: ' path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });      
}  
