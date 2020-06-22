module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        proxy: 'http://127.0.0.1:8888',
    }
}