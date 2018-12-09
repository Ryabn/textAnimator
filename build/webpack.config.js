module.exports = {
    entry: './script.js',
    output: {
        filename: '../../docs/js/scripts.bundle.js'
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