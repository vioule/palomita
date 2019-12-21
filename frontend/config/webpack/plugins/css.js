const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = new MiniCssExtractPlugin(
    {moduleFilename: ({name})=> 'css/'+name+'.css'}  );
