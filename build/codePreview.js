const CodeMirror = require('codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');
require('codemirror/mode/htmlmixed/htmlmixed');

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

function previewCode(html, js){
    var myCodeMirror = CodeMirror(document.body, {
        value: "function myScript(){return 100;}\n",
        mode:  "javascript",
        lineNumbers: true,
        theme: "dracula"
      });
}