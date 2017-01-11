var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({'$':'jquery','jQuery':'jquery','window.jQuery':'jquery'});
module.exports = {
    entry:'./src/js/entry.js',
    output:{
        path:'./family/',
        publicPath:'./family/',
        filename:'index.js'
    },
    module:{ 
     loaders:[
       {test:/.js$/,loader:'babel',query:{presets: ['es2015'] },exclude:/node_modules/},
       {test:/.less$/,loader:'style!css!less'},
       {test:/.(jpg|png|gif)$/,loader:'url?limit=8129'}
     ]
    },
   plugins:[providePlugin]
}