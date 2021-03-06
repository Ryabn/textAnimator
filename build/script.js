const anime = require('animejs');
require('materialize-css');
require('materialize-css/sass/materialize.scss');

import { svggenerator } from './svgGenerator.js';
import { codemirror } from './codePreview.js';

window.onload = function(){
    M.AutoInit();
    animateLogo();
    codemirror.initCodePreview();
    update();
};
window.updateOptions = function(){
    svggenerator.setFont(document.getElementById('font-selector').value);
    svggenerator.setFontSize(document.getElementById('font-size').value);
    svggenerator.setStrokeWidth(document.getElementById('stroke-width').value);
    update();
};
window.update = function(){
    svggenerator.generate(document.getElementById('text-input__form').value, afterGen);
};
window.afterGen = function(){
    displayPreview(svggenerator.html);
    line();
    codemirror.updateHTMLPreview(svggenerator.html);
    codemirror.updateJSPreview("");
};
function displayPreview(generated){
    document.getElementById('view__text-preview').innerHTML = generated;
}
function animateLogo(){
    var line = anime({
        targets: '.logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });   
}
function line(){
    var lineDrawing = anime({
        targets: '#view__text-preview path' ,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });    
}  
