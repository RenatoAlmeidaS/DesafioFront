const withCSS = require('@zeit/next-css');
const withImages = require('next-images')

module.exports = withImages(withCSS({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000',
    webpack: function (config) {
        config.node = {
            fs: 'empty'
        };

        return config
    }
}));
