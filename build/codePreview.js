const CodeMirror = require('codemirror');

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

function initCodePreview(html, js){
    codemirror.html = CodeMirror(document.getElementById('code-preview__body--html'), {
        value: html,
        mode:  "htmlmixed",
        lineNumbers: true,
        theme: "dracula"
    });
    codemirror.js = CodeMirror(document.getElementById('code-preview__body--js'), {
        value: js,
        mode:  "javascript",
        lineNumbers: true,
        theme: "dracula"
    });
}
function updateHTMLPreview(html){
    codemirror.html.setValue(js);
}
function updateJSPreview(js){
    codemirror.js.setValue(js)
}
export {codemirror};