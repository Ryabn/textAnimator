const ClipboardJS = require("clipboard");
const anime = require('animejs');

import { svggenerator } from './svgGenerator.js';
import { codemirror } from './codePreview.js';

window.onload = function(){
    updatedValue();
    codemirror.initCodePreview('<!-- Generated code here -->', '//Generated code here');
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
    line();
    codemirror.updateHTMLPreview(generatedCode, generatedCode);
    codemirror.updateJSPreview(generatedCode, " ");
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
