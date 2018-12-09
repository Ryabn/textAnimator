module.exports = {
    entry: ['./script.js', './codePreview.js'],
    output: {
        path: '../../docs/js/',
        filename: 'scripts.bundle.js'
    },
    module:{
    rules: [{
        test: /\.css$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
        ] 
    }]},
    mode: 'development'
};