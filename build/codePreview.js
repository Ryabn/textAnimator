const CodeMirror = require('codemirror');
require('codemirror-formatting');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');
require('codemirror/mode/htmlmixed/htmlmixed');

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

let codemirror = {
    html: null,
    js: null,
    'initCodePreview': initCodePreview,
    'updateJSPreview': updateJSPreview,
    'updateHTMLPreview': updateHTMLPreview,
}

function initCodePreview(){
    codemirror.html = CodeMirror(document.getElementById('code-preview__html'), {
        value: '<!-- Generated code here -->',
        mode:  "htmlmixed",
        lineNumbers: true,
        theme: "dracula"
    });
    codemirror.js = CodeMirror(document.getElementById('code-preview__js'), {
        value: '//Generated code here',
        mode:  "javascript",
        lineNumbers: true,
        theme: "dracula"
    });
}
function updateHTMLPreview(html){
    codemirror.html.setValue(html);
    CodeMirror.commands["selectAll"](codemirror.html);
    codemirror.html.autoFormatRange(codemirror.html.getCursor(true), codemirror.html.getCursor(false));
    CodeMirror.commands["singleSelection"](codemirror.html);
}
function updateJSPreview(js){
    if(js==""){

        js = `//Insert this code into your javascript
// and call animateSVG(); on document load
function animateSVG(){
    var lineDrawing = anime({
        targets: ' path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });      
    window.onload = function(){
        animateSVG();
    }
}`
    }
    codemirror.js.setValue(js)
}
export {codemirror};
