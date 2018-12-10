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
    },
    {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
    }]},
    mode: 'development',
    'devtool': 'cheap-inline-module-source-map'
};