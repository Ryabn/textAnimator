const TextToSVG = require('text-to-svg');

const svggenerator = {
    'generate': generate,
    'setFont': setFont,
    'setFontSize': setFontSize,
    'setStrokeWidth': setStrokeWidth,
    'setStrokeDashArray': setStrokeDashArray,
    'setStrokeDashOffset': setStrokeDashOffset,
    'html': ''
};
let fonts = ['SourceSansPro-Bold', 'Biryani-ExtraBold'];
const userOptions = {
    'font': fonts[0],
    'fontSize': 200,
    'hasColor': false,
    'strokeWidth': 5,
    'strokeDasharray': 150,
    'style' : 'stroke-dashoffset: 150px'
};

/**
 * @param {*} index 
 * Should be the index of loop in case of specific settings for a certain character in array
 * 
 * @todo: When user would like to customize color setSettings take extra parameter of an array that contains all color values
 * Currently just hardcoded to a dark grey
 */
function getOptions(options, index){
    let stroke, fill;
    if(options.hasColor){
        stroke = '#151515';
        fill = '#151515';
    }else{
        stroke = generatePastelColor();
        fill = 'none';
        // fill='#00FF00';
    }
    let styles = {
        'user': {
            'font': options.font,
        },
        'tts': {
            'x': 0, 
            'y': 0, 
            'fontSize': options.fontSize, 
            'anchor': 'top', 
            'attributes': {
                'fill': fill,
                'stroke': stroke,
                'stroke-width': options.strokeWidth,
                'stroke-dasharray': options.strokeDasharray,
                'style' : options.style,
            },
        }
    };    
    return styles;
}

/**
 * main called function
 * @param {} text 
 */
function generate(text){
    let styles = getOptions(userOptions);
    TextToSVG.load(`fonts/${styles.user.font}.ttf`, function(err, textToSVG) {
        let generated = "";
        for(let i = 0; i < text.length; i++){
            let styles = getOptions(userOptions);

            let letter = text.substr(i,1);
            generated += textToSVG.getSVG(letter, styles.tts);
        }
        svggenerator.html = `<!-- Insert this SVG snippet into your html code -->${generated}`;
    });
}

function generatePastelColor(){
    return `hsl( ${parseInt(Math.random()*360)}, 60%, 80%)`;
}
function generateColor(){
    return `hsl( ${parseInt(Math.random()*360)}, 100%, 60%)`;
}
function setFont(font){
    userOptions['font'] = font;
}
function setFontSize(fontSize){
    userOptions['fontSize'] = fontSize;
}
function setStrokeWidth(strokeWidth){
    userOptions['strokeWidth'] = strokeWidth;
}
function setStrokeDashArray(strokeDasharray){
    userOptions['strokeDasharray'] = strokeDasharray;
}
function setStrokeDashOffset(strokeDashOffset){
    userOptions['style'] = 'stroke-dashoffset: ' + strokeDashOffset + 'px';
}

export {svggenerator};